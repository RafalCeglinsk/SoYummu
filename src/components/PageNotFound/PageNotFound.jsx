import error404 from "#images/404/error404.png";
import {
  NotFoundImage,
  NotFoundParagraph,
  NotFoundSpan,
  NotFoundWrapper,
} from "./PageNotFound.styled";

const PageNotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundImage $image={error404}></NotFoundImage>
      <NotFoundParagraph>We are sorry,</NotFoundParagraph>
      <NotFoundSpan>
        but the page you were looking for can't be found
      </NotFoundSpan>
    </NotFoundWrapper>
  );
};

export default PageNotFound;
