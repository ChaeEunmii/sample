<ul>
  {items.map(({ title, href }) => (
    <li key={href}>
      {typeof title === 'string' ? title : title.text}
    </li>
  ))}
</ul>