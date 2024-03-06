import React, { FC } from 'react';

import '../../../tailwind.css';

interface FriendPriceProps {
  price: number; // 假设价格是一个数字
}

export const FriendPrice: FC<FriendPriceProps> = ({ price }) => {
  return (
    <div
      className="justify-center items-center text-center w-auto"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <svg
        className="mx-auto mt-[10px] mb-[4px]"
        width="12"
        height="18"
        viewBox="0 0 12 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_709_6492)">
          <path
            d="M6.00051 16.9199V12.6984L0.778442 9.64453L6.00051 16.9199Z"
            fill="#F0CDC2"
            stroke="#1616B4"
            strokeWidth="0.0934783"
            strokeLinejoin="round"
          />
          <path
            d="M6.01776 16.9199V12.6984L11.2399 9.64453L6.01786 16.9199H6.01776Z"
            fill="#C9B3F5"
            stroke="#1616B4"
            strokeWidth="0.0934783"
            strokeLinejoin="round"
          />
          <path
            d="M6.00059 11.6489V6.26123L0.718506 8.62632L6.00059 11.6489Z"
            fill="#88AAF1"
            stroke="#1616B4"
            strokeWidth="0.0934783"
            strokeLinejoin="round"
          />
          <path
            d="M6.01776 11.6489V6.26123L11.2998 8.62642L6.01776 11.6489Z"
            fill="#C9B3F5"
            stroke="#1616B4"
            strokeWidth="0.0934783"
            strokeLinejoin="round"
          />
          <path
            d="M0.718506 8.62654L6.00049 0.09375V6.26135L0.718506 8.62654Z"
            fill="#F0CDC2"
            stroke="#1616B4"
            strokeWidth="0.0934783"
            strokeLinejoin="round"
          />
          <path
            d="M11.2999 8.62654L6.01788 0.09375V6.26135L11.2999 8.62654Z"
            fill="#B8FAF6"
            stroke="#1616B4"
            strokeWidth="0.0934783"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_709_6492">
            <rect width="10.75" height="17.013" fill="white" transform="translate(0.625)" />
          </clipPath>
        </defs>
      </svg>
      <p className="font-medium text-[12px] mx-auto">{price}</p>
    </div>
  );
};
