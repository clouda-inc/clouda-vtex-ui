import React from 'react';

interface InfoColumnProps {
  title: string;
  lines: string[];
}

const InfoColumn: React.FC<InfoColumnProps> = ({ title, lines }) => (
  <div className="flex flex-col gap-2 font-['DM_Sans']">
    <h3 className="text-[16px] font-bold leading-[24px] text-black">
      {title}
    </h3>
    <div className="text-[16px] font-normal leading-[24px] text-black">
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  </div>
);

interface OrderInfoSectionProps {
  order: {
    details: string;
    billingAddress: string;
    shippingAddress: string;
  };
}

export const OrderInfoSection: React.FC<OrderInfoSectionProps> = ({ order }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] w-full mt-[32px]">
      <InfoColumn 
        title="Order Details" 
        lines={[order.details]} 
      />
      <InfoColumn 
        title="Billing Address" 
        lines={[order.billingAddress]} 
      />
      <InfoColumn 
        title="Shipping Address" 
        lines={[order.shippingAddress]} 
      />
    </div>
  );
};
