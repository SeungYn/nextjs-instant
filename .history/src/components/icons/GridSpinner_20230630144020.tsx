import dynamic from 'next/dynamic';

const GridLoader = dynamic(
  () =>
    import('react-spinners').then((lib) => {
      return lib.GridLoader;
    }),
  { ssr: false }
);

// const GridLoader = lazy(() =>
//   import('react-spinners').then((lib) => lib.GridLoader)
// );

type Props = {
  color?: string;
};
export default function GridSpinner({ color = 'red' }: Props) {
  return <GridLoader color={color} />;
}
