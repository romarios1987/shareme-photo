import { urlFor } from '../client';

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
  return (
    <div>
      <img
        src={urlFor(image).width(250).url()}
        className="rounded-lg w-full"
        alt="s"
      />
    </div>
  );
};

export default Pin;
