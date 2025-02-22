//Card that displays a resume of the button info in tthe List component. Its fieldds can be customizedd according to buttonTemplate.
import ImageWrapper, { ImageType } from 'elements/ImageWrapper'
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from 'elements/Link';

export default function CardButtonList(props) {
  return (
    
    <div className="list__element">

          <div className="card-button-list card-button-list--need">


            <div className="card-button-list__picture-container">

              <div className="card-button-list__nav">

                <div className="arrow btn-circle__icon">
                  <IoChevronBackOutline />
                </div>
                <div className="arrow btn-circle__icon">
                  <IoChevronForwardOutline />
                </div>

              </div>
              <ImageWrapper imageType={ImageType.cardList} src="https://dummyimage.com/200/#ccc/fff" alt="popup_img"/>
            </div>


            <div className="card-button-list__content">

              <Link href="/ButtonFile">

                  <div className="card-button-list__header">

                    <div className="card-button-list__info">

                      <div className="card-button-list__status card-button-list__status">

                        <span className="card-button-list__status--offer">{props.type}</span>

                      </div>

                      <div className="card-button-list__status card-button-list__status">

                        <span className="card-button-list__title">{props.name}</span>

                      </div>

                    </div>

                    <div className="card-button-list__submenu card-button-list__trigger">
                    </div>

                  </div>

                  <div className="card-button-list__hashtags">

                        <div className="card-button-list__need">
                          <div className="hashtag">{props.tags}</div>
                        </div>

                  </div>

                  <div className="card-button-list__paragraph">

                    <p>{props.description}</p>

                  </div>

                  <div className="card-button-list__geoDate">

                    <div className="card-button-list__city card-button-list__everywhere " >
                      {props.geoPlace}
                    </div>

                    <div className="card-button-list__date">
                      {props.date}
                    </div>

                  </div>

              </Link>

              </div>

          </div>

    </div>

  );
}
