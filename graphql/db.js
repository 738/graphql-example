export const boards = [
    {
        id: 0,
        title: '공지사항',
        contents: '안녕하세요\n저는 운영자입니다.',
        userId: 0,
        comments: [{
            userId: 0,
            contents: '굳굳',
            insertTime: '20181029',
            updateTime: '20181029',
            reComments: [{
                userId: 1,
                contents: '메롱1',
                insertTime: '20181029',
                updateTime: '20181029',
            }, {
                userId: 1,
                contents: '메롱2',
                insertTime: '20181029',
                updateTime: '20181029',
            }]
        }, {
            userId: 0,
            contents: '굳굳1',
            insertTime: '20181029',
            updateTime: '20181029'
        }, {
            userId: 0,
            contents: '굳굳2',
            insertTime: '20181029',
            updateTime: '20181029'
        }],
        insertTime: '20181029',
        updateTime: '20181029',
    },
    {
        id: 1,
        title: '공지사항1',
        contents: '안녕하세요\n저는 운영자1입니다.',
        userId: 0,
        comments: [{
            userId: 0,
            contents: '굳굳',
            insertTime: '20181029',
            updateTime: '20181029',
            reComments: [{
                userId: 1,
                contents: '메롱1',
                insertTime: '20181029',
                updateTime: '20181029',
            }, {
                userId: 1,
                contents: '메롱2',
                insertTime: '20181029',
                updateTime: '20181029',
            }]
        }, {
            userId: 0,
            contents: '굳굳1',
            insertTime: '20181029',
            updateTime: '20181029'
        }, {
            userId: 0,
            contents: '굳굳2',
            insertTime: '20181029',
            updateTime: '20181029'
        }],
        insertTime: '20181029',
        updateTime: '20181029',
    }
];

export const users = [
    {
        id: 0,
        nickname: 'hello',
    },
    {
        id: 1,
        nickname: 'hello1',
    },
    {
        id: 2,
        nickname: 'hello2',
    },
    {
        id: 3,
        nickname: 'hello3',
    },
]

export const getUserById = (id) => {
    const filteredUser = users.filter(user => user.id === id);
    return filteredUser[0];
}