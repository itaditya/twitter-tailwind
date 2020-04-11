import { IconSearch } from './Icons';

export default function InputSearch(props) {
  return (
    <div className="group flex items-center bg-gray-900 border border-transparent hover:border-primary w-full text-white px-4 py-2 font-medium rounded-full">
      <span className="mr-3">
        <IconSearch size="sm" className="text-gray-400 group-hover:text-primary" />
      </span>
      <input type="text" placeholder="Search Twitter" className="bg-transparent" {...props}>
      </input>
    </div>
  );
}
