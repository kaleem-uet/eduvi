import { PrimaryCardWrapper } from '../Common/Wrapper/PrimaryCardWrapper';
import React from 'react';

function PrimaryCard({ children, ...props }) {
    return <PrimaryCardWrapper {...props}>{children}</PrimaryCardWrapper>;
}

export default PrimaryCard;
