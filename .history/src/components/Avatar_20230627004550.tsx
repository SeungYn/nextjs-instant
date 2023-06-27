type Props = { image?: string | null };
// oauth를 사용한 이미지 url은 nextjs image 태그를 사용을 하기가 어려움 내부 도메인을 알아야함
export default function Avatar({ image }: Props) {
  return (
    <div>
      // eslint-disable-next-line @next/next/no-img-element
      <img src={image ?? undefined} alt='user profile' />
    </div>
  );
}