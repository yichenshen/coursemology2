import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import TitleBar from 'lib/components/TitleBar';
import SurveysEmpty from '../components/SurveysEmpty';
import SurveysTable from '../components/SurveysTable';
import NewSurveyButton from '../containers/NewSurveyButton';
import translations from '../translations';

const propTypes = {
  surveys: PropTypes.array.isRequired,
  params: PropTypes.shape({
    courseId: PropTypes.string.isRequired,
  }),
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

const Surveys = ({ intl, surveys, params: { courseId } }) => {
  surveys.sort((a, b) => new Date(a.start_at) - new Date(b.start_at));

  return (
    <div>
      <TitleBar
        title={intl.formatMessage(translations.surveys)}
      />
      { surveys.length > 0 ? <SurveysTable {...{ surveys, courseId }} /> : <SurveysEmpty /> }
      <NewSurveyButton />
    </div>
  );
};

Surveys.propTypes = propTypes;

export default connect(state => state)(injectIntl(Surveys));
