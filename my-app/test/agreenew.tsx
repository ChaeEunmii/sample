{isTopLevel && showRequiredText && (
  <Text as="strong" color="alert" className={styles.requiredTxt}>
    {data.requiredText
      ? data.requiredText
      : "약관에 동의해 주세요."}
  </Text>
)}