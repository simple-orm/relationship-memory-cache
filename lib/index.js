module.exports = function() {
  this._relationshipCache = {};

  this.clearRelationshipCache = function(relationshipModelName) {
    if(relationshipModelName) {
      if(this._relationshipCache[relationshipModelName]) {
        delete this._relationshipCache[relationshipModelName];
      }
    } else {
      this._relationshipCache = {};
    }
  }

  this.hook('beforeGetRelationship[relationshipCache]', function(model, relationshipType, relationshipModelName, abortCallback) {
    if(model._relationshipCache[relationshipModelName]) {
      abortCallback(model._relationshipCache[relationshipModelName]);
    }
  });

  this.hook('afterGetRelationship[relationshipCache]', function(model, relationshipType, relationshipModelName, relationshipData) {
    model._relationshipCache[relationshipModelName] = relationshipData;
  });

  this.hook('afterSave[relationshipCache]', function(model) {
    model.clearRelationshipCache();
  })
};
