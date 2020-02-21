import React, { Fragment } from 'react';
import { TopPart } from '../components/TopPart';
import { BottomPart } from '../components/BottomPart';
import { Row } from '../components/Row';
import { SectionWithImageAndLink, SectionSeparator, Section } from '../components/Section';
import { Ruler } from '../components/Ruler';
import { Footer } from '../components/Footer';

export const Lab = ({data}) => (
    <Fragment>
        <TopPart
            fluidImage={data.felfeleLabImage.childImageSharp.fluid}
            pageTitle='Lab'
            subTitle='Here are some work-in-progress, and unpolished experiments. Everything is open source, so feel free to play with these, improve them or use in your own apps.'
        />
        <BottomPart>
            <Row>
                <SectionWithImageAndLink
                    title='SWAPCHAT'
                    text='A disposable, end-to-end encrypted, and completely anonymous chat DApp that was built during the Swarm Hack Week 2019 in Madrid.'
                    image={data.felfeleLabImage.childImageSharp.fluid}
                    link='https://swapchat.felfele.org'
                    label='WEBSITE'
                />
                <SectionSeparator/>
                <SectionWithImageAndLink
                    title='FEEDS'
                    text='We wanted a mobile, completely free and independent RSS reader with no algorithmic timeline—like in the good ol’ days—so we built it.'
                    image={data.felfeleLabImage.childImageSharp.fluid}
                    link='https://swapchat.felfele.org'
                    label='FOR iOS'
                />
            </Row>

            <Row>
                <SectionWithImageAndLink
                    title='NICHE BETA (Next release)'
                    text='Work-in-progress for the next release of Niche.'
                    image={data.felfeleLabImage.childImageSharp.fluid}
                    link='https://swapchat.felfele.org'
                    label='TRY IN TESTFLIGHT'
                />
                <SectionSeparator/>
                <SectionWithImageAndLink
                    title='FELFELE ON GITHUB'
                    text='Access all our repositories on Github'
                    image={data.felfeleLabImage.childImageSharp.fluid}
                    link='https://github.com/felfele'
                    label='GITHUB'
                />
            </Row>

            <Ruler />

            <Footer/>
        </BottomPart>
    </Fragment>
)

export default Lab;

export const query = graphql`
    query {
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
