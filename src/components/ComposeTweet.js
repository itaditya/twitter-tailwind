import { IconImage, IconGIF, IconPoll, IconProgress, IconCirclePlus } from './Icons';
import ButtonPrimary from './ButtonPrimary';

export default function ComposeTweet() {
  return (
    <div className="flex px-4 py-3">
      <div className="mr-4">
        <img
          className="w-12 h-12"
          src="https://pbs.twimg.com/profile_images/1246452594152574977/Ivwut-hd_reasonably_small.png"
        />
      </div>
      <div className="flex-1">
        <div>
          <textarea
            className="bg-transparent text-lg"
            placeholder="What's happening?"
            style={{ resize: 'none' }}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex text-sm text-primary">
            <li className="mr-4">
              <IconImage />
            </li>
            <li className="mr-4">
              <IconGIF />
            </li>
            <li className="mr-4">
              <IconPoll />
            </li>
          </ul>
          <ul className="flex items-center text-sm text-primary">
            <li className="mr-4">
              <IconProgress />
            </li>
            <li className="mr-4 border border-primary rounded-full p-1">
              <IconCirclePlus />
            </li>
            <li>
              <ButtonPrimary>Tweet</ButtonPrimary>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
