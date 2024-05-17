import React from 'react';
import Subjects from '../Subjects';
import TeacherDashboard from './TeacherDashboard';

function TeacherSubjects() {
    return (
        <TeacherDashboard>
            <Subjects dashboard />
        </TeacherDashboard>
    );
}

export default TeacherSubjects;
