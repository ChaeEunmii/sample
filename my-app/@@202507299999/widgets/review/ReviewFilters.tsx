// 라이브러리
import { useState } from 'react';
// 컴포넌트
import {
  Stack,
  Text,
  Switch,
  Button,
  TextButton,
  SelectDrawer,
  Dialog,
  FormArea,
  FormItem,
  Chip,
  Tag,
  Carousel,
  Select,
  Checkbox,
} from '@shared/ui';
// 스타일
import styles from './ReviewFilters.module.scss';

export interface FilterValues {
  type: string[];
  score: string[];
  persona: string[];
  [key: string]: string[] | string;
}

interface ReviewFiltersProps {
  photoOnly: boolean;
  sortValue: string;
  filterValues: FilterValues;
  onPhotoToggle: (checked: boolean) => void;
  onSortChange: (value: string) => void;
  onFilterChange: (filters: FilterValues) => void;
  options?: Array<{
    key: string;
    label: string;
    data: { value: string; label: string }[];
  }>;
  personaOptions?: Array<{
    key: string;
    title: string;
    data: { label: string; value: string }[];
  }>;
}

interface FilterTag {
  id: string;
  text: string;
  type: string;
  value: string;
}

export const ReviewFilters = ({
  photoOnly,
  sortValue,
  filterValues,
  onPhotoToggle,
  onSortChange,
  onFilterChange,
  options = [],
  personaOptions = [],
}: ReviewFiltersProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isPersonaChecked, setIsPersonaChecked] = useState(false);
  const [tempFilterValues, setTempFilterValues] = useState<FilterValues>(filterValues);

  const reviewOptions = [
    {
      label: '추천 순',
      value: 'recommended',
      tip: '상품평에 포함된 이미지, 텍스트, 별점, 등록일을 점수화해 정렬합니다.',
    },
    { label: '최신 등록순', value: 'newest' },
    { label: '평점 높은 순', value: 'reviews_desc' },
    { label: '평점 낮은 순', value: 'reviews_asc' },
  ];

  const typeOptions = [
    { label: '전체', value: 'all' },
    { label: '한달사용', value: 'monthly' },
    { label: '체험단', value: 'experience' },
    { label: '받은선물', value: 'gift' },
  ];

  const scoreOptions = [
    { label: '전체', value: 'all' },
    { label: '5점', value: '5' },
    { label: '4점', value: '4' },
    { label: '3점', value: '3' },
    { label: '2점', value: '2' },
    { label: '1점', value: '1' },
  ];

  const handleChipChange = (key: keyof FilterValues, values: string[]) => {
    let newValues = values;

    if (values.includes('all')) {
      if (!tempFilterValues[key]?.includes?.('all')) {
        newValues = ['all'];
      } else if (values.length > 1) {
        newValues = values.filter((v) => v !== 'all');
      }
    } else {
      newValues = values.filter((v) => v !== 'all');
    }

    setTempFilterValues({
      ...tempFilterValues,
      [key]: newValues,
    });
  };

  const handleSelectChange = (key: string, value: string) => {
    setTempFilterValues({
      ...tempFilterValues,
      [key]: value,
    });
  };

  const handlePersonaCheck = (checked: boolean) => {
    setIsPersonaChecked(checked);
  };

  const getFilterTags = (): FilterTag[] => {
    const tags: FilterTag[] = [];

    // 기간 필터 태그
    (filterValues.type || []).forEach((value: string) => {
      if (value !== 'all') {
        const option = typeOptions.find((d) => d.value === value);
        if (option) {
          tags.push({
            id: `type-${value}`,
            text: option.label,
            type: 'type',
            value: value,
          });
        }
      }
    });

    // 평점 필터 태그
    (filterValues.score || []).forEach((value: string) => {
      if (value !== 'all') {
        const option = scoreOptions.find((d) => d.value === value);
        if (option) {
          tags.push({
            id: `score-${value}`,
            text: option.label,
            type: 'score',
            value: value,
          });
        }
      }
    });

    // 개인 맞춤 정보 필터 태그
    personaOptions.forEach(({ key, data }) => {
      (filterValues.persona || [])
        .filter((value) => value !== 'all')
        .forEach((value) => {
          const option = data.find((d) => d.value === value);
          if (option) {
            tags.push({
              id: `persona-${value}`,
              text: option.label,
              type: 'persona',
              value: value,
            });
          }
        });
    });

    // 동적 옵션 필터 태그
    options.forEach(({ key, data }) => {
      const filterValue = filterValues[key];
      if (typeof filterValue === 'string' && filterValue !== 'all') {
        const option = data.find((d) => d.value === filterValue);
        if (option) {
          tags.push({
            id: `${key}-${filterValue}`,
            text: option.label,
            type: key,
            value: filterValue,
          });
        }
      }
    });

    return tags;
  };

  const filteredTags = getFilterTags();

  const handleTagClose = (tagId: string) => {
    const tag = filteredTags.find((t) => t.id === tagId);
    if (!tag) return;

    if (tag.type === 'persona') {
      // 개인 맞춤 정보는 배열에서 해당 값 제거
      const currentValues = filterValues.persona || [];
      const newValues = currentValues.filter((v) => v !== tag.value);
      onFilterChange({
        ...filterValues,
        persona: newValues,
      });
    } else if (Array.isArray(filterValues[tag.type])) {
      // 배열 타입 필터 (type, score)
      const currentValues = filterValues[tag.type] as string[];
      const newValues = currentValues.filter((v) => v !== tag.value);
      onFilterChange({
        ...filterValues,
        [tag.type]: newValues,
      });
    } else {
      // 단일 선택 옵션들
      onFilterChange({
        ...filterValues,
        [tag.type]: 'all',
      });
    }
  };

  const handleFilterOpen = () => {
    setTempFilterValues(filterValues);
    setIsFilterOpen(true);
  };

  const handleFilterReset = () => {
    const resetValues: FilterValues = {
      type: [],
      score: [],
      persona: [],
    };

    // 동적 옵션들도 'all'로 초기화
    options.forEach(({ key }) => {
      resetValues[key] = 'all';
    });

    setTempFilterValues(resetValues);
  };

  const handleFilterCancel = () => {
    setIsFilterOpen(false);
  };

  const handleFilterConfirm = () => {
    onFilterChange(tempFilterValues);
    setIsFilterOpen(false);
  };

  return (
    <>
      <Stack type="end">
        <div className={styles.photo}>
          <Switch
            id="only-photo"
            variant="point"
            checked={photoOnly}
            onChange={(e) => onPhotoToggle(e.target.checked)}
            size="small"
          />
          <Text as="label" htmlFor="only-photo" size="4">
            포토상품평
          </Text>
        </div>

        <SelectDrawer
          title="정렬"
          options={reviewOptions}
          value={sortValue}
          onChange={onSortChange}
          variant="filter"
        />

        <TextButton suffixIcon="filter" size="1" onClick={handleFilterOpen}>
          필터
        </TextButton>
      </Stack>

      {filteredTags.length > 0 && (
        <Carousel
          className={styles.tags}
          spaceBetween={8}
          slides={filteredTags.map((tag) => (
            <Tag key={tag.id} onClose={() => handleTagClose(tag.id)} size="small">
              {tag.text}
            </Tag>
          ))}
          freeMode
        />
      )}

      <Dialog
        isOpen={isFilterOpen}
        onClose={handleFilterCancel}
        title="필터"
        footer={
          <>
            <Button onClick={handleFilterCancel}>취소</Button>
            <Button variant="primary" onClick={handleFilterConfirm}>
              확인
            </Button>
          </>
        }
      >
        <TextButton
          className={styles.reset}
          suffixIcon="refresh"
          variant="underline"
          onClick={handleFilterReset}
        >
          초기화
        </TextButton>

        <FormArea type="vertical" gap="3">
          <FormItem title="유형">
            <Chip
              name="type"
              variant="filled"
              data={typeOptions}
              multiple
              selected={tempFilterValues.type || []}
              onChange={(vals: string[]) => handleChipChange('type', vals)}
              size="small"
              columns="auto"
            />
          </FormItem>

          <FormItem title="평점">
            <Chip
              name="score"
              variant="filled"
              data={scoreOptions}
              multiple
              selected={tempFilterValues.score || []}
              onChange={(vals: string[]) => handleChipChange('score', vals)}
              size="small"
              columns="auto"
            />
          </FormItem>

          {options.length > 0 && (
            <FormItem title="옵션" fieldClassName={styles.options}>
              {options.map(({ key, label, data }) => (
                <Select
                  key={key}
                  options={data}
                  value={(tempFilterValues[key] as string) || 'all'}
                  onChange={(value: string) => handleSelectChange(key, value)}
                />
              ))}
              <Checkbox
                label="내 맞춤정보"
                size="medium"
                checked={isPersonaChecked}
                onChange={(e) => handlePersonaCheck(e.target.checked)}
              />
            </FormItem>
          )}

          {personaOptions.length > 0 && (
            <FormItem title="개인 맞춤 정보" fieldClassName={styles.persona}>
              {personaOptions.map(({ key, title, data }) => (
                <Chip
                  key={key}
                  name={key}
                  variant="filled"
                  data={data}
                  multiple
                  selected={
                    tempFilterValues.persona?.filter((value) =>
                      data.some((option) => option.value === value)
                    ) || []
                  }
                  onChange={(vals: string[]) => {
                    // 다른 그룹의 선택값들을 유지하면서 현재 그룹만 업데이트
                    const otherGroupValues = (tempFilterValues.persona || []).filter(
                      (value) => !data.some((option) => option.value === value)
                    );
                    const newPersonaValues = [...otherGroupValues, ...vals];
                    handleChipChange('persona', newPersonaValues);
                  }}
                  size="small"
                  columns="auto"
                  aria-label={title}
                />
              ))}
            </FormItem>
          )}
        </FormArea>
      </Dialog>
    </>
  );
};
