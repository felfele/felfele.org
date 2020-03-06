import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { Ruler } from '../components/Ruler';
import { TopPart } from '../components/TopPart';
import { BottomPart } from '../components/BottomPart';
import { Row } from '../components/Row';
import { SectionWithImageAndLink, SectionSeparator, Section } from '../components/Section';
import { Colors } from '../data/style';
import { Illustration } from '../components/Illustration';

import MainIllustration from '../assets/main-illustration.svg'

const SiteIndex = ({ data }) => (
    <Fragment>
        <TopPart
            icon={<Illustration src={MainIllustration} style={{ maxWidth: 692 }} title='Illustration by Ailadi — ailadi.com'/>}
            subTitle="We build products that let people connect and inspire each other, without being exploited by technology."
            style={{
                backgroundColor: Colors.INDEX_PAGE_BACKGROUND,
            }}
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
