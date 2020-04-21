import {db} from '../config/firebase'

export const getAllEvents = () => {
    let events = []
    return new Promise((resolve, reject) => {
        db.collection("events")
            .get()
            .then(doc => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    })
                }
                if (Object.keys(doc).length > 0) {
                    doc.forEach(res => {
                        events.push(res.data())
                    })
                    resolve({
                        success: true,
                        data: events
                    })
                }
            })
            .catch(e => {
                reject(e)
            });
    })
}

export const getSpecificEvent = (id) => {
    return new Promise((resolve, reject) => {
        db.collection("events").doc(id)
            .get()
            .then(doc => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    })
                }
                if (!doc.exists) {
                    resolve({
                        success: false,
                        data: {}
                    })
                }
                if (Object.keys(doc).length > 0) {
                    resolve({
                        success: true,
                        data: doc.data()
                    })
                }
            })
            .catch(e => {
                reject(e)
            });
    })
}
