'use strict';

import React, { Component, useState } from 'react';
import awsApi from 'Utilities/aws';

class FolderSelector extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    let availableFolders = await awsApi.listAvailableFolders();
    this.props.setData(availableFolders);
  }

  render() {
    let availableFolders = this.props.data;
    return (
      <div className="flex flex-col items-end">
        {availableFolders.length > 0 && (
          availableFolders.map((f, i) => {
            let formattedName = f.split('-').join(' ');
            return (
              <div key={i} className="text-base text-right capitalize underline my-2">
                {formattedName}
              </div>
            );
          })
        )}
      </div>
    );
  }

};

export default FolderSelector;

        // <div className="text-base text-right underline my-2">{'Colour'}</div>
        // <div className="text-base text-right underline my-2">{'Black and white'}</div>
        // <div className="text-base text-right underline my-2">{'u00dok_1'}</div>
        // <div className="text-base text-right underline my-2">{'Painting Saskatchewan'}</div>
        // <div className="text-base text-right underline my-2">{'Big Fucking Rocks'}</div>
        // <div className="text-base text-right underline my-2">{'Waterloo Regional Space Program'}</div>
