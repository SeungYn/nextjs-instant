import dynamic from 'next/dynamic';
import { lazy } from 'react';

// const GridLoader = dynamic(
//   () =>
//     import('react-spinners').then((lib) => {
//       console.log(lib);
//       return lib.GridLoader;
//     }),
//   { ssr: false }
// );

const GridLoader = lazy(() =>
  import('react-spinners').then((lib) => lib.GridLoader)
);

type Props = {
  color?: string;
};
export default function GridSpinner({ color = 'red' }: Props) {
  return <GridLoader color={color} />;
}
