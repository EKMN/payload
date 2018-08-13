import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ArchiveView } from 'payload/components';
import { HeadingButton } from 'payload/components';
import { Filter } from 'payload/components';

const mapStateToProps = state => ({
  collections: state.collections.all
});

class Archive extends Component {
  constructor(props) {
    super(props);
    this.slug = 'pages';
    this.collection = this.props.collections[this.slug];
  }

  render() {
    return (
      <ArchiveView slug={this.slug} collection={this.collection}>
        <HeadingButton
          heading={this.collection.attrs.label}
          buttonLabel="Add New"
          buttonUrl={`/collections/${this.slug}/add-new`}
          buttonType="link" />
        <Filter />
      </ArchiveView>
    );
  }
}

export default connect(mapStateToProps)(Archive);