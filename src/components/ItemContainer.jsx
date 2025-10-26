import css from './ItemContainer.module.css'
function ItemContainer({ appTitle, appImg ,appDescription}) {
  return (
    <div
      className={`card bg-dark bg-gradient text-white bg-opacity-50 ${css.mydiv}`}
      
    >
      <img
        src={appImg}
        className={`card-img-top img-fluid ${css.img}`}
        alt="Images"
      />
      <div className="card-body">
        <h5 className="card-title">{appTitle}</h5>
        <p className={`card-text ${css.cardText}`}>
          {appDescription}
        </p>
      </div>
    </div>
  );
}
export default ItemContainer;
