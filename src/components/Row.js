import React from 'react';
import { CONTENT_MAX_WIDTH, WIDTH_THRESHOLD, PADDING_SIZE_CSS_EXPRESSION } from '../data/style';

export class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render = () => (
        <div style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: PADDING_SIZE_CSS_EXPRESSION,
            maxWidth: CONTENT_MAX_WIDTH,
            flex: 1,
            display: 'flex',
            flexDirection: this.state.width > WIDTH_THRESHOLD ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: this.state.width > WIDTH_THRESHOLD ? 'normal' : 'center',
        }}>
            {this.props.children}
        </div>
        )
}
