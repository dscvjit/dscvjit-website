import { db } from '../config/firebase';

export const getAllEvents = () => {
  let events = [];
  return new Promise((resolve, reject) => {
    db.collection('events')
      .get()
      .then((doc) => {
        if (doc.empty) {
          resolve({
            success: false,
            data: {}
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
export const getAllSpeakersFromEvent = (speakersId) => {
  let speakers = [];
  return new Promise((resolve, reject) => {
    for (const speakerId of speakersId) {
      db.collection('Speakers')
        .doc(speakerId)
        .get()
        .then((doc) => {
          if (doc.empty) {
            resolve({
              success: false,
              data: {}
            });
          }
          speakers.push(doc.data());
          if (speakers.length === speakersId.length) {
            resolve({
              success: true,
              data: speakers
            });
          }
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
};

export const getAllPartnersFromEvent = (partnersId) => {
  let partners = [];
  return new Promise((resolve, reject) => {
    for (const partnerId of partnersId) {
      db.collection('partners')
        .doc(partnerId)
        .get()
        .then((doc) => {
          if (doc.empty) {
            resolve({
              success: false,
              data: {}
            });
          }
          partners.push(doc.data());
          if (partners.length === partnersId.length) {
            console.log('partners: ', partners);
            resolve({
              success: true,
              data: partners
            });
          }
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
};

export const getAllProjects = () => {
  let projects = [];
  return new Promise((resolve, reject) => {
    db.collection('projects')
      .get()
      .then((doc) => {
        if (doc.empty) {
          resolve({
            success: false,
            data: {}
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
      .orderBy('date', 'asc')
      .limit(8)
      .get()
      .then((doc) => {
        if (doc.empty) {
          resolve({
            success: false,
            data: {}
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
      .get()
      .then((doc) => {
        if (doc.empty) {
          resolve({
            success: false,
            data: {}
          });
        }
        if (Object.keys(doc).length > 0) {
          doc.forEach((res) => {
            team.push(res.data());
          });
          resolve({
            success: true,
            data: team
          });
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};
