export default {
    port: 8888, 
    dbUri: "mongodb://127.0.0.1:27017",
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    saltWorkFactor: 10,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQC7v76BXjyywhUhOW5lu9HJ9+93/xm3Sn63FcGSZe8TsPgLEpYt
Q5ukpMuNv1anrpuNQit8XTlXIxXn5on9eCcTpgYQc8H1ME7dcrVQp2WZFIVe1FC/
3dkV/4PoW9J3wEECrNE36EWFCJpVjv+GS/fd33bA7YvUVT//9vM14C95QQIDAQAB
AoGAbfwNpcuG01FO/3+dZIt6gk50Ql92uSEyyh48n36HZ4msRRBGWY3Zh8HiXM9R
/DkVdtLklp4mER3En202OP5CJQbsxaDQCbO/8dSyEIKhkFKcE5VcvEtVL6SpFMQb
fZbeMwQAuv5F9Pt881ZZJ6t7rpMgiybXtq7ajIFxSVxHLWECQQDscqxuIwvc6r1y
nyQ+LTjpPhE5aJ/cCFyFc0L4n+XCRPR5OUqHnRfYTIHsuxVFptgjuV85Amh46UoC
47oiwtVbAkEAy0YrwnnEVTGfurZ9/yhaRfmJ+z6jgC2vHZ1Ao3nTwAbD4MckzyC/
+DniOm3Zmio6LcvLz7kuXTXvU0uHz+DCkwJAQKnf1EMLZIBiDS3OmJ5/ePI7farK
RT+YJfrurtXz3NxEy75KTqo8si/CPH6xg5nsdGCm1Q1+isqqLf4fkpAcDwJABdWQ
wfcuvGc9N2WvfhhRZvq/jBeDJ9Wn1gjCZy7C9hr7mkL8+njtKZm3tYebnEIkA1Z7
Fg4xl3lJ0jEzx7KiwwJAbuaa5BfeuhLaBFmP6TnhHHqNSGOOkcJCT71CftTe7na2
Mj1RfCikou5wxLrlQ11A0W+GWvDzuqjad4BHuk6RCg==
-----END RSA PRIVATE KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7v76BXjyywhUhOW5lu9HJ9+93
/xm3Sn63FcGSZe8TsPgLEpYtQ5ukpMuNv1anrpuNQit8XTlXIxXn5on9eCcTpgYQ
c8H1ME7dcrVQp2WZFIVe1FC/3dkV/4PoW9J3wEECrNE36EWFCJpVjv+GS/fd33bA
7YvUVT//9vM14C95QQIDAQAB
-----END PUBLIC KEY-----`
}