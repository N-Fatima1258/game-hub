import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  // keys are numbers that represent the rating of the game
  // this object can have any number of keys and the keys are numbers ,,, now map each key to an image props defined in chakra
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
// [key: number] ===> index signature
// ImageProps ==> this type defines the props available on the image component
//  {...emojiMap[rating]}  ==> because we are spreading this object, all the properties will be added to our image component
