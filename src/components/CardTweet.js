import { IconComment, IconRetweet, IconLike, IconShare } from './Icons';

export default function CardTweet(props) {
  const { imageUrl } = props;
  return (
    <article className="flex px-4 py-3">
      <div>
        <img
          className="w-12 h-12"
          src="https://pbs.twimg.com/profile_images/1246452594152574977/Ivwut-hd_reasonably_small.png"
        />
      </div>
      <section className="px-4 flex-1">
        <div className="flex">
          <h5 className="font-bold mr-2">Aditya Agarwal</h5>
          <span className="text-gray-400">@dev__adi</span>
        </div>
        <p className="mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae itaque nemo nobis ea recusandae deserunt
          laudantium, totam rem, tempore, aliquam quo possimus non impedit quia ut illo vero voluptate inventore!
        </p>
        {
          imageUrl && (
            <img src={imageUrl} className="rounded-xl mt-4 border border-gray-900" />
          )
        }
        <ul className="flex justify-between text-sm text-gray-400 mt-4 pr-32">
          <li>
            <button className="flex hover:text-primary">
              <IconComment size="sm" />
              <span className="ml-2">2</span>
            </button>
          </li>
          <li>
            <button className="flex hover:text-primary">
              <IconRetweet size="sm" />
              <span className="ml-2">200</span>
            </button>
          </li>
          <li>
            <button className="flex hover:text-primary">
              <IconLike size="sm" />
              <span className="ml-2">8000</span>
            </button>
          </li>
          <li>
            <button className="flex hover:text-primary">
              <IconShare size="sm" />
            </button>
          </li>
        </ul>
      </section>
    </article>
  );
}
