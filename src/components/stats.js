export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding features 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numShipped = items.filter((item) => item.shipped).length;
  const percentage = Math.round((numShipped / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `🎉 You shipped all the features! 🎉`
          : `💻 You have ${numItems} features on your ShipList, and you already shipped ${numShipped} features (${percentage}%)`}
      </em>
    </footer>
  );
}
