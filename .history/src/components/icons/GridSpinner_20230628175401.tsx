import dynamic from 'next/dynamic';

const GridLoader = dynamic(() =>
  import('react-spinners').then((lib) => {
    console.log(lib);
    return lib.GridLoader;
  })
);

type Props = {
  color: string;
};
export default function GridSpinner({ color = 'red' }: Props) {
  return <div></div>;
}
