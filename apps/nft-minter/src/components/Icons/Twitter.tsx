import { Path } from "../Path";

export function Twitter(props: {
  css?: any;
  className?: string;
}) {
  return (
    <svg
      css={props.css}
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        options={{ fill: true }}
        d="M8.28982 20.2545C15.8373 20.2545 19.9648 14.0015 19.9648 8.57946C19.9648 8.40181 19.9612 8.22506 19.953 8.049C20.7541 7.46985 21.4507 6.74695 22 5.92441C21.2648 6.25106 20.4737 6.47103 19.6436 6.5702C20.4907 6.06226 21.1413 5.25837 21.4482 4.30026C20.6552 4.77045 19.7771 5.11211 18.8427 5.29636C18.0936 4.49885 17.0272 4 15.8473 4C13.581 4 11.7433 5.83774 11.7433 8.10291C11.7433 8.42501 11.7795 8.73801 11.8495 9.0385C8.4395 8.86721 5.41549 7.23419 3.3919 4.75157C3.03909 5.35778 2.83596 6.06249 2.83596 6.81383C2.83596 8.23734 3.56046 9.49413 4.6621 10.2295C3.98901 10.2088 3.35664 10.0237 2.80366 9.71614C2.80275 9.7332 2.80275 9.75049 2.80275 9.76846C2.80275 11.7559 4.21739 13.4151 6.09472 13.7911C5.7501 13.885 5.38751 13.9355 5.01309 13.9355C4.74877 13.9355 4.49173 13.9091 4.24173 13.8616C4.76401 15.4916 6.27897 16.6781 8.07509 16.7116C6.67045 17.8123 4.90117 18.4681 2.97881 18.4681C2.64784 18.4681 2.32119 18.4492 2 18.4112C3.81591 19.575 5.97211 20.2545 8.28982 20.2545Z"
      />
    </svg>
  );
}
