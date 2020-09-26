import * as React from "react";
import Share from 'social-share-react';

const Shares:React.FC = ():JSX.Element => {
  return (
    <div className="shareContainer">
      <span>可分享到：</span>
      <Share
        url='https://www.baidu.com'
        title='分享生活点滴'
        sites={['wechat','qzone','qq','weibo']}
        disabled={['google', 'facebook', 'twitter']}
      />
    </div>
  );
};

export default Shares;