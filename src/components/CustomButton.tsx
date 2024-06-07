import Link from 'next/link';

type Props = {
  color: string;
  title: string;
  href: string;
};

const CustomButton = ({ color, title, href }: Props) => {
  return (
    <Link
      className={`w-fit px-4 py-3 ${color} text-white rounded-lg hover:brightness-105 hover:shadow-lg transition-all duration-150 ease-in-out`}
      href={href}
    >
      {title}
    </Link>
  );
};
export default CustomButton;
