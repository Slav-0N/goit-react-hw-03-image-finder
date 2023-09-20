{
  pictures &&
    pictures.map(({ id, webformatURL }) => {
      return (
        <li key={id}>
          <img src={webformatURL} alt="" />
        </li>
      );
    });
}
