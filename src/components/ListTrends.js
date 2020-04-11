import { IconSettings, IconChevronBottom } from './Icons';

export default function ListTrends() {
  return (
    <section className="bg-gray rounded-xl">
      <div className="py-3 px-5 border-b border-gray-600 flex justify-between">
        <h4 className="text-xl font-bold">Trends for you</h4>
        <span className="text-primary"><IconSettings /></span>
      </div>
      <ul>
        <li className="px-5 py-2 border-b border-gray-600 hover:bg-gray-900 flex justify-between">
          <div>
            <span className="text-gray-400 text-sm">Trending in India</span>
            <h6 className="text-lg">
              Google and Apple
            </h6>
            <span className="text-gray-400 text-sm">36.7K Tweets</span>
          </div>
          <span>
            <IconChevronBottom size="xs" className="mt-1 text-gray-400" />
          </span>
        </li>
        <li className="px-5 py-2 border-b border-gray-600 hover:bg-gray-900 flex justify-between">
          <div>
            <span className="text-gray-400 text-sm">Trending in India</span>
            <h6 className="text-lg">
              Google and Apple
            </h6>
            <span className="text-gray-400 text-sm">36.7K Tweets</span>
          </div>
          <span>
            <IconChevronBottom size="xs" className="mt-1 text-gray-400" />
          </span>
        </li>
        <li className="px-5 py-2 border-b border-gray-600 hover:bg-gray-900 flex justify-between">
          <div>
            <span className="text-gray-400 text-sm">Trending in India</span>
            <h6 className="text-lg">
              Google and Apple
            </h6>
            <span className="text-gray-400 text-sm">36.7K Tweets</span>
          </div>
          <span>
            <IconChevronBottom size="xs" className="mt-1 text-gray-400" />
          </span>
        </li>
        <li className="px-5 py-2 border-b border-gray-600 hover:bg-gray-900 flex justify-between">
          <div>
            <span className="text-gray-400 text-sm">Trending in India</span>
            <h6 className="text-lg">
              Google and Apple
            </h6>
            <span className="text-gray-400 text-sm">36.7K Tweets</span>
          </div>
          <span>
            <IconChevronBottom size="xs" className="mt-1 text-gray-400" />
          </span>
        </li>
      </ul>
      <div className="px-5 py-4 text-primary">
        <button>
          Show More
        </button>
      </div>
    </section>
  );
}
