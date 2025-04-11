import { type SvgIconType, svgIconDefaultProps } from "./_props";

const SvgComponent = ({
  width = svgIconDefaultProps.width,
  height = svgIconDefaultProps.height,
  color = svgIconDefaultProps.color,
  ...props
}: SvgIconType) => (
  <svg height="1.5rem" width="1.5rem" viewBox="-16.71 -23.5 144.82 141">
    <path d="M19.3 36.7L0 30.4 12.1 47 .2 63.5l19.1-6.3 11.6 16.6V53.3L50.4 47l-19.5-6.4V20.2z" />
    <path d="M74.7 47L31.9 94h36.7l42.8-47L68.6 0H31.9z" />
  </svg>
);

export default SvgComponent;
