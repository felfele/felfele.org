import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { TopPart } from '../components/TopPart';
import { Ruler } from '../components/Ruler';
import { BottomPart } from '../components/BottomPart';
import { Row } from '../components/Row';
import { SectionWithImageAndLink, SectionSeparator, Section } from '../components/Section';
import {
    Colors,
    CONTENT_MAX_WIDTH,
    VERTICAL_PADDING,
    VERTICAL_HALF_PADDING,
    MIN_SECTION_PADDING,
    FONT_SIZE_D14_M12,
    FONT_SIZE_D18_M12,
    FONT_SIZE_D14_M10,
    FONT_SIZE_D18_M14,
} from '../data/style';
import { Illustration } from '../components/Illustration';
import { calcVerticalSize } from '../utils/calc'

import MainIllustration from '../assets/main-illustration.svg'
import { SubscribeInput } from '../components/SubscribeInput';

const HeroImage = ({ image }) => (
    <div style={{
        position: 'relative',
    }}>
        <div>
            <div style={{
                margin: 0,
                padding: 0,
                backgroundColor: Colors.INDEX_PAGE_BACKGROUND,
                display: 'flex',
                height: '68vmin',
            }}></div>
            <div style={{
                margin: 0,
                padding: 0,
                backgroundColor: Colors.BACKGROUND_COLOR,
                display: 'flex',
                height: '10vmin',
            }}></div>
        </div>
        <div style={{
            zIndex: 1,
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}
            >
                {image}
            </div>
        </div>
    </div>
)

const Subscribe = () => (
    <div
        style={{
            width: '100%',
            backgroundColor: Colors.INDEX_PAGE_BACKGROUND,
        }}
    >
        <div
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: CONTENT_MAX_WIDTH,
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: MIN_SECTION_PADDING,
                paddingRight: MIN_SECTION_PADDING,
            }}
        >

            <p
                className='para'
                style={{
                    fontFamily: 'Jost',
                    fontSize: FONT_SIZE_D18_M12,
                    color: 'black',
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >GET NEWS &amp; EARLY ACCESS TO OUR APPS
            </p>

            <SubscribeInput
                id='index-subscribe'
                style={{
                    marginTop: calcVerticalSize(18),
                }}
                inputStyle={{
                    borderColor: 'white',
                    backgroundColor: 'white',
                    borderRadius: 0,
                    fontSize: FONT_SIZE_D18_M14,
                }}
                buttonStyle={{
                    backgroundColor: 'black',
                    borderRadius: 0,
                    fontFamily: 'Jost',
                    fontSize: FONT_SIZE_D14_M12,
                }}
                label='SUBSCRIBE'
            />

            <p
                className='para'
                style={{
                    fontFamily: 'Nunito Sans',
                    fontSize: FONT_SIZE_D14_M10,
                    color: '#00000077',
                    marginTop: calcVerticalSize(19),
                    marginBottom: 0,
                    paddingBottom: VERTICAL_HALF_PADDING,
                }}
            >We will never spam or share your email with anyone else.
            </p>
        </div>
    </div>
)


const SiteIndex = ({ data }) => (
    <Fragment>
        <TopPart
            style={{
                backgroundColor: Colors.INDEX_PAGE_BACKGROUND,
            }}
            title='We build products that let people connect and inspire each other, without being exploited by technology.'
        />
        <Subscribe />
        <HeroImage
            image={
                <Illustration
                    src={MainIllustration}
                    style={{
                        maxWidth: 692,
                        height: '80.2vmin',
                        width: '90vmin',
                    }}
                    title='Illustration by Ailadi — ailadi.com'
                />
            }
        />
        <BottomPart>
            <Row>
                <Section
                    title='NOT FOR PROFIT'
                    body='Seeking profit while building social media often leads to decisions and compromises that we refuse to make. We value freedom and the satisfaction to work on projects with positive social impact over quick profits.'
                />
                <SectionSeparator/>
                <Section
                    title='OPEN SOURCE'
                    body='We’re developing open protocols and libraries for building decentralized social applications. By sharing our work, we hope to inspire other people, ease collaboration, and support similar projects.'
                />
                <SectionSeparator/>
                <Section
                    title='INDEPENDENT'
                    body='We believe in small and independent communities. In the spirit of the early internet, we intend to bring some freedom and diversity in spaces currently dominated by Orwellian tech giants.'
                />
            </Row>

            <Ruler/>

            <Row>
                <SectionWithImageAndLink
                    title='GET OUR APP'
                    text='Niche is a decentralized sharing application empowering private communities to share content with absolute privacy, in a calm and fully customizable environment.'
                    link='/niche'
                    label='LEARN MORE'
                    image={data.nicheLogoImage.childImageSharp.fluid}
                />
                <SectionSeparator/>
                <SectionWithImageAndLink
                    title='EXPERIMENT &amp; COLLABORATE'
                    text='We share our work openly in our product lab. Anyone can access our Github repositories along with other product experiments that might be inspiring to you.'
                    link='/lab'
                    label='CHECK FELFELE LAB'
                    image={data.felfeleLabImage.childImageSharp.fluid}
                />
            </Row>
        </BottomPart>
    </Fragment>
)

export default SiteIndex;

export const query = graphql`
    query {
        nicheLogoImage: file(
            relativePath: { eq: "niche-logo-image.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            childImageSharp {
                fluid(maxWidth: 560, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        felfeleLabImage: file(
            relativePath: { eq: "felfele-lab-image.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            childImageSharp {
                fluid(maxWidth: 560, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`;
