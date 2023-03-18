function Movie({ id, summary, coverImg, title, genres }) {
  return (
    <div className="title-image">
      <img src={coverImg} alt={title} />
      <h2>
        <p>{summary}</p>
      </h2>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
