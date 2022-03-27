import { FC } from "react";

interface RightArrowIconProps {
  color: string
}

const RightArrowIcon: FC<RightArrowIconProps> = ({color}) => {
  return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="8" stroke={color}/>
        <path d="M8 5.6001L11.5 9.04076L8 12.6001" stroke={color}/>
      </svg>
  );
};

export default RightArrowIcon;
