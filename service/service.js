import { db } from '../config/firebase';

export const getAllEvents = () => {
  let events = [];
  return new Promise((resolve, reject) => {
    db.collection('events')
      .where('visible', '==', true)
      .orderBy('date', 'desc')
      .get()
      .then((doc) => {
        if (doc.empty) {
          resolve({
            success: false,
            data: []
          });
        }
        if (Object.keys(doc).length > 0) {
          doc.forEach((res) => {
            events.push(res.data());
          });
          resolve({
            success: true,
            data: events
          });
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const getSpecificEvent = (id) => {
  return new Promise((resolve, reject) => {
    db.collection('events')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.empty) {
          resolve({
            success: false,
            data: {}
          });
        }
        if (!doc.exists) {
          resolve({
            success: false,
            data: {}
          });
        }
        if (Object.keys(doc).length > 0) {
          resolve({
            success: true,
            data: doc.data()
          });
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const getAllSpeakersFromEvent = (speakerIds) => {
  const speakers = [];
  return new Promise((resolve, reject) => {
    if (speakerIds.length === 0) {
      resolve({
        status: 'empty',
        data: []
      });
    }

    speakerIds.map((id, index) => {
      db.collection('speakers')
        .doc(id)
        .get()
        .then((doc) => {
          if (!doc.empty) {
            speakers.push(doc.data());
          }
          if ((speakerIds.length = index + 1)) {
            if (speakers.length === 0) {
              resolve({
                status: 'empty',
                data: []
              });
            }
            resolve({
              status: 'success',
              data: speakers
            });
          }
        })
        .catch((e) => {
          resolve({
            status: 'error',
            data: e.message
          });
          reject(e);
        });
    });
  });
};

export const getAllPartnersFromEvent = (partnerIds) => {
  const partners = [];
  return new Promise((resolve, reject) => {
    if (partnerIds.length === 0) {
      resolve({
        status: 'empty',
        data: []
      });
      return;
    }
    partnerIds.map((id, index) => {
      db.collection('partners')
        .doc(id)
        .get()
        .then((doc) => {
          if (!doc.empty) {
            partners.push(doc.data());
          }
          if ((partnerIds.length = index + 1)) {
            if (partners.length === 0) {
              resolve({
                status: 'empty',
                data: []
              });
            }
            resolve({
              status: 'success',
              data: partners
            });
          }
        })
        .catch((e) => {
          resolve({
            status: 'error',
            data: e.message
          });
          reject(e);
        });
    });
  });
};

export const getAllProjects = () => {
  let projects = [];
  return new Promise((resolve, reject) => {
    db.collection('projects')
      .where('visible', '==', true)
      .orderBy('date', 'desc')
      .get()
      .then((doc) => {
        if (doc.empty) {
          resolve({
            success: false,
            data: []
          });
        }
        if (Object.keys(doc).length > 0) {
          doc.forEach((res) => {
            projects.push(res.data());
          });
          resolve({
            success: true,
            data: projects
          });
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const getRecentProjects = () => {
  let projects = [];
  return new Promise((resolve, reject) => {
    db.collection('projects')
      .where('visible', '==', true)
      .limit(8)
      .get()
      .then((doc) => {
        if (doc.empty) {
          resolve({
            success: false,
            data: []
          });
        }
        if (Object.keys(doc).length > 0) {
          doc.forEach((res) => {
            projects.push(res.data());
          });
          resolve({
            success: true,
            data: projects
          });
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const getSpecificProject = (id) => {
  return new Promise((resolve, reject) => {
    db.collection('projects')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.empty) {
          resolve({
            success: false,
            data: {}
          });
        }
        if (!doc.exists) {
          resolve({
            success: false,
            data: {}
          });
        }
        if (Object.keys(doc).length > 0) {
          resolve({
            success: true,
            data: doc.data()
          });
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const getAllTeam = () => {
  let team = [];
  return new Promise((resolve, reject) => {
    db.collection('team')
      .where('role', 'in', ['Core Team', 'Organizing Team', 'Volunteer'])
      .get()
      .then((doc) => {
        if (doc.empty) {
          resolve({
            status: 'empty',
            data: []
          });
        }
        if (Object.keys(doc).length > 0) {
          doc.forEach((res) => {
            team.push(res.data());
          });
          resolve({
            status: 'success',
            data: team
          });
        }
      })
      .catch((e) => {
        resolve({
          status: 'error',
          data: e.message
        });
        reject(e);
      });
  });
};

export const getAllFaculty = () => {
  let faculty = [];
  return new Promise((resolve, reject) => {
    db.collection('team')
      .where('visible', '==', true)
      .where('role', '==', 'Faculty Coordinator')
      .get()

      .then((doc) => {
        if (doc.empty) {
          resolve({
            status: 'empty',
            data: []
          });
        }
        if (Object.keys(doc).length > 0) {
          doc.forEach((res) => {
            faculty.push(res.data());
          });
          resolve({
            status: 'success',
            data: faculty
          });
        }
      })
      .catch((e) => {
        resolve({
          status: 'error',
          data: e.message
        });
        reject(e);
      });
  });
};
