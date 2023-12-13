import React from 'react';
import PropTypes from 'prop-types';
import { VncViewerWrapper } from './VncViewer.styled';

const VncViewer = () => (
 <VncViewerWrapper data-testid="VncViewer">
    VncViewer Component
 </VncViewerWrapper>
);

VncViewer.propTypes = {};

VncViewer.defaultProps = {};

export default VncViewer;
