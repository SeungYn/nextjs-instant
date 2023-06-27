type Props = {
  image?: string | null;
  size?: 'small' | 'big';
  border?: boolean;
};
// oauth를 사용한 이미지 url은 nextjs image 태그를 사용을 하기가 어려움 내부 도메인을 알아야함
// 다시 이미지 url 도메인을 next config에 등록을 해줘야 함. 하지만 각종 oauth를 사용하면 하나하나 등록하기가 어려움
// 그래서 img태그를 사용 하지만 이렇게 사용하면 warrning을 주는데 아래 주석으로 warnning을 지워줄 수 있음
export default function Avatar({
  image,
  size = 'small',
  border = true,
}: Props) {
  return (
    <div
      className={`${
        size === 'small' ? 'w-9 h-9' : 'w-12 h-12'
      } bg-gradient-to-bl from-cyan-500 to-blue-500 rounded-full inline-block  leading-9`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`rounded-full  w-full h-full ${border ? 'p-[0.1rem]' : ''}`}
        src={image ?? undefined}
        alt='user profile'
      />
    </div>
  );
}
