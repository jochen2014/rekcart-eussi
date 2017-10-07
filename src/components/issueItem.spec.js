import React from 'react';
import renderer from 'react-test-renderer';
import IssueItem from './issueItem';

describe('issue item', () => {
    it('should render correctly', () => {
        Date.now = jest.genMockFunction().mockReturnValue(1507342218559); // 7/10/2017 13:10
        const data = {
            "id": 111,
            "number": 1,
            "state": "open",
            "title": "unit test",
            "user": {
                "id": 1,
                "avatarUrl": "https://avatars3.githubusercontent.com/u/1?v=4",
                "name": "bochen"
            },
            "dateCreated_raw": "2017-10-05T10:55:42Z",
            "dateCraetedStr": "14 minutes ago",
            "tags": ["CLA Signed"]
        }
        const tree = renderer.create(<IssueItem issue={data} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})