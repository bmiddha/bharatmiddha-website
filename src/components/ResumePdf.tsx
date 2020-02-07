import React, { FC } from 'react';
import { Document, Page, StyleSheet, Text, View, Font, PDFDownloadLink } from '@react-pdf/renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { ResumeProps } from './Resume';

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
    fontSize: '10pt',
    fontFamily: 'Roboto',
    paddingVertical: 15,
    paddingHorizontal: 20
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
    fontWeight: 'bold',
    marginBottom: 2
  },
  h2: {
    fontSize: '14pt',
    fontWeight: 'bold',
    marginBottom: 2
  },
  h3: {
    fontSize: '13pt',
    fontWeight: 'bold',
    borderBottom: 1,
    marginBottom: 2
  },
  h4: {
    fontSize: '12pt',
    fontWeight: 'bold',
    textDecoration: 'underline',
    marginBottom: 2
  },
  h5: {
    fontSize: '11pt',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 2
  },
  h6: {
    fontSize: '11pt',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 2
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
  },
  links: {
    textAlign: 'right',
    display: 'flex',
    flexGrow: 1,
    marginRight: '110px'
  }
});

export const ResumePdf: FC<ResumeProps> = ({ data }) => {
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
    associations,
    projects
  } = data;

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
          <Text style={styles.h4}>{e?.organization}</Text>
          <Text style={styles.h5}>{e?.location}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.h5}>{e?.position}</Text>
          <Text>{`${e?.start} - ${e?.end}`}</Text>
        </View>
        <View style={styles.list}>
          {e?.points?.map((s, key) => (
            <Text style={styles.li} key={`${key}-${s}`}>
              - {s}
            </Text>
          ))}
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
                <Text>{email}</Text>
                <Text>{location}</Text>
              </View>
              <View style={styles.links}>
                <Text>{links.github}</Text>
                <Text>{links.linkedin}</Text>
                <Text>{links.website}</Text>
              </View>
            </View>
            <Text>
              {summary.map((e, key) => (
                <>
                  {e}
                  {key < summary.length - 1 ? '  |  ' : ''}
                </>
              ))}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.h3}>Skills</Text>
            {skills.map((e, key) => (
              <View key={`${key}-${e.title}`}>
                <Text style={styles.h4}>{e.title}</Text>
                <View style={styles.inlineList}>
                  {e.values.map((s, key) => (
                    <Text key={`${key}-${s}`}>
                      {s}
                      {key < e.values.length - 1 ? '  |  ' : ''}
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
                <View style={styles.row}>
                  <Text style={styles.h4}>{e.school}</Text>
                  <Text>{`${e.start} - ${e.end}`}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.h5}>{e.degree}</Text>
                  <Text>{e.gpa? `GPA: ${e.gpa}`: ''}</Text>
                </View>
                <View>
                  <Text>Relevant Coursework:</Text>
                  <Text>
                    {e.coursework.map((s, key) => (
                      <Text key={`${key}-${s}`}>
                        {s}
                        {key < e.coursework.length - 1 ? '  |  ' : ''}
                      </Text>
                    ))}
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.h3}>Experience</Text>
            {ViewMapper(experience)}
          </View>
          <View style={styles.section}>
            <Text style={styles.h3}>Volunteer Work</Text>
            {ViewMapper(volunteer)}
          </View>
          <View style={styles.section} break>
            <Text style={styles.h3}>Professional Associations</Text>
            {ViewMapper(associations)}
          </View>
          <View style={styles.section}>
            <Text style={styles.h3}>Featured Projects</Text>
            {projects.map((e, key) => (
              <View key={key}>
                <View style={styles.row}>
                  <Text style={styles.h4}>{e.name}</Text>
                  <Text>{e.link}</Text>
                </View>
                <View style={styles.inlineList}>
                  {e.technologies.map((s, key) => (
                    <Text key={`${key}-${s}`}>
                      {s}
                      {key < e.technologies.length - 1 ? '  |  ' : ''}
                    </Text>
                  ))}
                </View>
                <View style={styles.list}>
                  {e?.points?.map((s, key) => (
                    <Text style={styles.li} key={`${key}-${s}`}>
                      - {s}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFDownloadLink
      className="btn btn-info"
      document={<ResumePdfDocument />}
      fileName={'bharat-middha-resume.pdf'}
    >
      {({ blob, url, loading, error }) =>
        loading ? (
          <>Generating Pdf</>
        ) : error ? (
          console.error(error)
        ) : (
          <>
            Download PDF <FontAwesomeIcon icon={faFilePdf} />
          </>
        )
      }
    </PDFDownloadLink>
  );
};

export default ResumePdf;
