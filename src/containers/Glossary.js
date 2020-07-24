import React from 'react';
import classes from './Glossary.module.scss';
import data from '../content/content';


export default function Glossary() {
    return (
        <div>
            <body className={classes.container}>
            <div className={classes.content }>
                
                <h1>Glossary</h1>
                <p><span>Active Transport:</span>{data.glossary.ActiveTransport}</p>
                <p><span>Activity Card:</span>{data.glossary.ActivityCard}</p>
                <p><span>Activity Zone:</span>{data.glossary.ActivityZone}</p>
                <p><span>Classroom Physical Activity: </span>{data.glossary.ClassroomPhysicalActivity}</p>
                <p><span>Intra-school Sport: </span>{data.glossary.IntraschoolSport}</p>
                <p><span>Inter-school Sport:</span>{data.glossary.InterschoolSport}</p>
                <p><span>Physical Activity:</span>{data.glossary.PhysicalActivity}</p>
                <p><span>Physical Activity Committee:</span>{data.glossary.PhysicalActivityCommittee}</p>
                <p><span>Physical Activity Leader or Coordinator:</span>{data.glossary.PhysicalActivityLeaderorCoordinator}</p>
                <p><span>Physical Education:</span>{data.glossary.PhysicalEducation}</p>
                <p><span>Professional Development:</span>{data.glossary.ProfessionalDevelopment}</p>
                <p><span>Recess / Lunchtime Play:</span>{data.glossary.Recess}</p>
                <p><span>Representative Committee: </span>{data.glossary.RepresentativeCommittee}</p>
                <p><span>Representative Committee:</span>{data.glossary.SpecialistPhysicalEducationteacher}</p>
                <p>{data.glossary.SschoolDays}</p>
            </div>
            </body>
            
        </div>
    )
}
