const formatFields = (config) => {
  let fields = config.fields.reduce((formatted, field) => {
    if (field.hidden === true || field?.admin?.disabled === true) {
      return formatted;
    }

    return [
      ...formatted,
      field,
    ];
  }, [{ name: 'id', label: 'ID', type: 'text' }]);

  if (config.timestamps) {
    fields = fields.concat([
      {
        name: 'createdAt',
        label: 'Created At',
        type: 'date',
      }, {
        name: 'updatedAt',
        label: 'Updated At',
        type: 'date',
      },
    ]);
  }

  if (config.upload) {
    fields = fields.concat([
      {
        name: 'filename',
        label: 'Filename',
        type: 'text',
      },
    ]);
  }

  return fields;
};

export default formatFields;
