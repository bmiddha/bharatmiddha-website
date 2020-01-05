import React, { FC } from 'react';
import { Document, Page, StyleSheet, Text, View, Font, PDFDownloadLink } from '@react-pdf/renderer';
import { ResumeData } from '../ResumeData';

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: `/fonts/Roboto-Regular.ttf`
    },
    {
      src: `/fonts/Roboto-Bold.ttf`,
      fontWeight: 'bold'
    },
    {
      src: `/fonts/Roboto-Italic.ttf`,
      fontWeight: 'normal',
      fontStyle: 'italic'
    },
    {
      src: `/fonts/Roboto-BoldItalic.ttf`,
      fontWeight: 'bold',
      fontStyle: 'italic'
    }
  ]
});

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    fontSize: '11pt',
    fontFamily: 'Roboto',
    padding: 10
  },
  section: {
    flexGrow: 1,
    marginBottom: 5
  },
  header: {
    flexGrow: 1,
    marginBottom: 5
  },
  organization: {},
  h1: {
    fontSize: '15pt',
    fontWeight: 'bold'
  },
  h2: {
    fontSize: '14pt',
    fontWeight: 'bold'
  },
  h3: {
    fontSize: '13pt',
    fontWeight: 'bold',
    borderBottom: 1
  },
  h4: {
    fontSize: '12pt',
    fontWeight: 'bold',
    textDecoration: 'underline'
  },
  h5: {
    fontSize: '11pt',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  h6: {
    fontSize: '11pt',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  inlineList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  inlineLi: {
    marginRight: 5
  },
  list: {},
  li: {},
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  textAlignRight: {
    textAlign: 'right',
    display: 'flex',
    flexGrow: 1
  }
});

export const ResumePdf: FC = () => {
  const {
    name,
    location,
    email,
    summary,
    links,
    skills,
    education,
    experience,
    volunteer,
    associations
  } = ResumeData;

  type OrgSection = {
    organization?: string;
    start?: string;
    end?: string;
    position?: string;
    points?: string[];
    location?: string;
  };

  const ViewMapper = (sectionKey: OrgSection[]) =>
    sectionKey.map((e, key) => (
      <View style={styles.organization} key={`${key}-${e.organization}`}>
        <View style={styles.row}>
          <Text style={styles.h4}>{e.organization ? e.organization : ''}</Text>
          <Text style={styles.h5}>{e.location ? e.location : ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.h5}>{e.position ? e.position : ''}</Text>
          <Text>{`${e.start ? e.start : ''} - ${e.end ? e.end : ''}`}</Text>
        </View>
        <View style={styles.list}>
          {e.points ? (
            e.points.map((s, key) => (
              <Text style={styles.li} key={`${key}-${s}`}>
                {s}
              </Text>
            ))
          ) : (
            <></>
          )}
        </View>
      </View>
    ));

  const ResumePdfDocument = () => (
    <Document>
      <Page size="LETTER" style={styles.page} wrap>
        <View style={styles.article}>
          <View style={styles.header}>
            <View style={styles.row}>
              <View>
                <Text style={styles.h2}>{name}</Text>
                <Text style={styles.inlineLi}>{email}</Text>
                <Text style={styles.inlineLi}>{location}</Text>
              </View>
              <View>
                <Text>{links.github}</Text>
                <Text>{links.linkedin}</Text>
                <Text>{links.website}</Text>
              </View>
            </View>
            <Text>{summary}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.h3}>Skills</Text>
            {skills.map((e, key) => (
              <View key={`${key}-${e.title}`}>
                <Text style={styles.h4}>{e.title}</Text>
                <View style={styles.inlineList}>
                  {e.values.map((s, key) => (
                    <Text style={styles.inlineLi} key={`${key}-${s}`}>
                      {s}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.h3}>Education</Text>
            {education.map((e, key) => (
              <View key={`${key}-${e.school}`}>
                <Text style={styles.h4}>{e.school}</Text>
                <View style={styles.row}>
                  <Text style={styles.h5}>{e.degree}</Text>
                  <Text>{`${e.start} - ${e.end}`}</Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.h3}>Experience</Text>
            {ViewMapper(experience)}
          </View>
          <View style={styles.section}>
            <Text style={styles.h3}>Professional Associations</Text>
            {ViewMapper(associations)}
          </View>
          <View style={styles.section}>
            <Text style={styles.h3}>Volunteer Work</Text>
            {ViewMapper(volunteer)}
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFDownloadLink
      className="btn btn-primary"
      document={<ResumePdfDocument />}
      fileName={'test.pdf'}
    >
      {({ blob, url, loading, error }) => (loading ? 'Generating Pdf' : 'Download PDF')}
    </PDFDownloadLink>
  );
};

export default ResumePdf;
