import Link from 'next/link';
import { IconTwitterLogo, IconHome, IconExplore, IconNew, IconNotifications, IconMessages } from '../components/Icons';
import ComposeTweet from '../components/ComposeTweet';
import CardTweet from '../components/CardTweet';
import InputSearch from '../components/InputSearch';
import ListTrends from '../components/ListTrends';
import ListFollowSuggestions from '../components/ListFollowSuggestions';

function Home() {
  return (
    <div className="bg-body text-white">
      <div className="grid grid-cols-3 mx-64 min-h-screen" style={{ gridTemplateColumns: '250px 1fr 350px' }}>
        <nav className="fixed">
          <div className="mt-4 mb-8 ml-4">
            <IconTwitterLogo size="xl" />
          </div>
          <ul>
            <li className="mb-6">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full">
                      <span>
                        <IconHome size="lg" className="" />
                      </span>
                      <span className="ml-4 text-xl">Home</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-6">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full">
                      <span>
                        <IconExplore size="lg" className="" />
                      </span>
                      <span className="ml-4 text-xl">Explore</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-6">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full">
                      <span>
                        <IconNotifications size="lg" className="" />
                      </span>
                      <span className="ml-4 text-xl">Notifications</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-6">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full">
                      <span>
                        <IconMessages size="lg" className="" />
                      </span>
                      <span className="ml-4 text-xl">Messages</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>{/* Empty div to prevent sidebar overlap */}</div>
        <main className="min-h-screen border-l border-r border-gray-600">
          <header className="text-xl font-bold flex justify-between px-4 py-3 border-b border-gray-600">
            <span>Home</span>
            <IconNew className="text-primary" />
          </header>
          <ComposeTweet />
          <div className="h-3 bg-gray-900"></div>
          <ul>
            <li className="border-b border-gray-600">
              <CardTweet imageUrl="https://pbs.twimg.com/media/EVRjNTPUcAIiYI2?format=jpg&name=large" />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
          </ul>
        </main>
        <aside className="pl-8 pr-2">
          <div className="mt-2">
            <InputSearch />
          </div>
          <div className="mt-4">
            <ListTrends />
          </div>
          <div className="mt-4">
            <ListFollowSuggestions />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
