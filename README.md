# Relationship Memory Cache

This is a plugin for the simple ORM library that add in support for cache relationship data in memory per model

# Documentation

When you get relational data that is setup with the belongsTo, hasOne, hasMany, ... methods.  By adding this plugin to the model:

```javascript
model.plugin(require('simple-orm-relationship-memory-cache'));
```

For the model instance, it will use the cached versions for every call after the first or until the cache in cleared.

To manually clear the cache, you use the `clearRelationshipCache()` method which take 1 optional parameter:

```javascript
//clears all relationship cache
model.clearRelationshipCache();

//clears relationship cache for the User model
model.clearRelationshipCache('User');
```

# License

MIT
