import React, {Component} from 'react'

import {H1, H2, Text, Button} from 'components/lib'
import Section from 'components/Section'
import booklet from 'assets/Symposium_Advanced_Analytics_Booklet.pdf'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Booklet extends Component {
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    goToPrevPage = () =>
        this.state.pageNumber > 1 ? this.setState(state => ({ pageNumber: state.pageNumber - 1 })) : this.setState(state => ({ pageNumber: state.pageNumber }));
    goToNextPage = () =>
        this.state.pageNumber < this.state.numPages ? this.setState(state => ({ pageNumber: state.pageNumber + 1 })) : this.setState(state => ({ pageNumber: state.pageNumber }));


    render() {
        const { pageNumber, numPages } = this.state;

        return (
            // <Page>
                <Section>
                    <H2>Symposium Advanced Analytics Booklet</H2>
                    <nav>
                        <Button onClick={this.goToPrevPage}>Prev</Button>
                        <Button onClick={this.goToNextPage}>Next</Button>
                    </nav>
                    <Document
                        file={booklet}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>
                    <Text>Page {pageNumber} of {numPages}</Text>
                </Section>
            // </Page>
        )
    }
}
