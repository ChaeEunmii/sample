<ul>
  {items.map(({ title, href }) => (
    <li key={href}>
      {typeof title === 'string' ? title : title.text}
    </li>
  ))}
</ul>



{items.map(({ title, href }) => {
  const isString = typeof title === 'string';
  const text = isString ? title : title.text;
  const color = isString ? undefined : title.color;

  return (
    <li key={href}>
      <a href={href} style={color ? { color } : undefined}>
        {text}
      </a>
    </li>
  );
})}