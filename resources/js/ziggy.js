const Ziggy = {
    url: "http://statamic.test",
    port: null,
    defaults: {},
    routes: {
        "debugbar.openhandler": {
            uri: "_debugbar/open",
            methods: ["GET", "HEAD"],
        },
        "debugbar.clockwork": {
            uri: "_debugbar/clockwork/{id}",
            methods: ["GET", "HEAD"],
            parameters: ["id"],
        },
        "debugbar.assets.css": {
            uri: "_debugbar/assets/stylesheets",
            methods: ["GET", "HEAD"],
        },
        "debugbar.assets.js": {
            uri: "_debugbar/assets/javascript",
            methods: ["GET", "HEAD"],
        },
        "debugbar.cache.delete": {
            uri: "_debugbar/cache/{key}/{tags?}",
            methods: ["DELETE"],
            parameters: ["key", "tags"],
        },
        "sanctum.csrf-cookie": {
            uri: "sanctum/csrf-cookie",
            methods: ["GET", "HEAD"],
        },
        "ignition.healthCheck": {
            uri: "_ignition/health-check",
            methods: ["GET", "HEAD"],
        },
        "ignition.executeSolution": {
            uri: "_ignition/execute-solution",
            methods: ["POST"],
        },
        "ignition.updateConfig": {
            uri: "_ignition/update-config",
            methods: ["POST"],
        },
        "statamic.cp.login": { uri: "cp/auth/login", methods: ["GET", "HEAD"] },
        "statamic.cp.": { uri: "cp/addons/editions", methods: ["POST"] },
        "statamic.cp.logout": {
            uri: "cp/auth/logout",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.password.request": {
            uri: "cp/auth/password/reset",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.password.email": {
            uri: "cp/auth/password/email",
            methods: ["POST"],
        },
        "statamic.cp.password.reset": {
            uri: "cp/auth/password/reset/{token}",
            methods: ["GET", "HEAD"],
            parameters: ["token"],
        },
        "statamic.cp.password.reset.action": {
            uri: "cp/auth/password/reset",
            methods: ["POST"],
        },
        "statamic.cp.token": { uri: "cp/auth/token", methods: ["GET", "HEAD"] },
        "statamic.cp.extend": {
            uri: "cp/auth/extend",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.unauthorized": {
            uri: "cp/auth/unauthorized",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.impersonation.stop": {
            uri: "cp/auth/stop-impersonating",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.index": { uri: "cp", methods: ["GET", "HEAD"] },
        "statamic.cp.dashboard": {
            uri: "cp/dashboard",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.navigation.index": {
            uri: "cp/navigation",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.navigation.create": {
            uri: "cp/navigation/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.navigation.store": {
            uri: "cp/navigation",
            methods: ["POST"],
        },
        "statamic.cp.navigation.show": {
            uri: "cp/navigation/{navigation}",
            methods: ["GET", "HEAD"],
            parameters: ["navigation"],
        },
        "statamic.cp.navigation.edit": {
            uri: "cp/navigation/{navigation}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["navigation"],
        },
        "statamic.cp.navigation.update": {
            uri: "cp/navigation/{navigation}",
            methods: ["PUT", "PATCH"],
            parameters: ["navigation"],
        },
        "statamic.cp.navigation.destroy": {
            uri: "cp/navigation/{navigation}",
            methods: ["DELETE"],
            parameters: ["navigation"],
        },
        "statamic.cp.navigation.blueprint.edit": {
            uri: "cp/navigation/{navigation}/blueprint",
            methods: ["GET", "HEAD"],
            parameters: ["navigation"],
        },
        "statamic.cp.navigation.blueprint.update": {
            uri: "cp/navigation/{navigation}/blueprint",
            methods: ["PATCH"],
            parameters: ["navigation"],
        },
        "statamic.cp.navigation.tree.index": {
            uri: "cp/navigation/{navigation}/tree",
            methods: ["GET", "HEAD"],
            parameters: ["navigation"],
        },
        "statamic.cp.navigation.tree.update": {
            uri: "cp/navigation/{navigation}/tree",
            methods: ["PATCH"],
            parameters: ["navigation"],
        },
        "statamic.cp.navigation.pages.update": {
            uri: "cp/navigation/{navigation}/pages",
            methods: ["POST"],
            parameters: ["navigation"],
        },
        "statamic.cp.navigation.pages.create": {
            uri: "cp/navigation/{navigation}/pages/create",
            methods: ["GET", "HEAD"],
            parameters: ["navigation"],
        },
        "statamic.cp.navigation.pages.edit": {
            uri: "cp/navigation/{navigation}/pages/{edit}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["navigation", "edit"],
        },
        "statamic.cp.collections.index": {
            uri: "cp/collections",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.collections.create": {
            uri: "cp/collections/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.collections.store": {
            uri: "cp/collections",
            methods: ["POST"],
        },
        "statamic.cp.collections.show": {
            uri: "cp/collections/{collection}",
            methods: ["GET", "HEAD"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.edit": {
            uri: "cp/collections/{collection}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.update": {
            uri: "cp/collections/{collection}",
            methods: ["PUT", "PATCH"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.destroy": {
            uri: "cp/collections/{collection}",
            methods: ["DELETE"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.scaffold": {
            uri: "cp/collections/{collection}/scaffold",
            methods: ["GET", "HEAD"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.scaffold.create": {
            uri: "cp/collections/{collection}/scaffold",
            methods: ["POST"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.blueprints.index": {
            uri: "cp/collections/{collection}/blueprints",
            methods: ["GET", "HEAD"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.blueprints.create": {
            uri: "cp/collections/{collection}/blueprints/create",
            methods: ["GET", "HEAD"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.blueprints.store": {
            uri: "cp/collections/{collection}/blueprints",
            methods: ["POST"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.blueprints.show": {
            uri: "cp/collections/{collection}/blueprints/{blueprint}",
            methods: ["GET", "HEAD"],
            parameters: ["collection", "blueprint"],
        },
        "statamic.cp.collections.blueprints.edit": {
            uri: "cp/collections/{collection}/blueprints/{blueprint}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["collection", "blueprint"],
        },
        "statamic.cp.collections.blueprints.update": {
            uri: "cp/collections/{collection}/blueprints/{blueprint}",
            methods: ["PUT", "PATCH"],
            parameters: ["collection", "blueprint"],
        },
        "statamic.cp.collections.blueprints.destroy": {
            uri: "cp/collections/{collection}/blueprints/{blueprint}",
            methods: ["DELETE"],
            parameters: ["collection", "blueprint"],
        },
        "statamic.cp.collections.blueprints.reorder": {
            uri: "cp/collections/{collection}/blueprints/reorder",
            methods: ["POST"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.tree.index": {
            uri: "cp/collections/{collection}/tree",
            methods: ["GET", "HEAD"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.tree.update": {
            uri: "cp/collections/{collection}/tree",
            methods: ["PATCH"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.entries.index": {
            uri: "cp/collections/{collection}/entries",
            methods: ["GET", "HEAD"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.entries.actions.run": {
            uri: "cp/collections/{collection}/entries/actions",
            methods: ["POST"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.entries.actions.bulk": {
            uri: "cp/collections/{collection}/entries/actions/list",
            methods: ["POST"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.entries.create": {
            uri: "cp/collections/{collection}/entries/create/{site}",
            methods: ["GET", "HEAD"],
            parameters: ["collection", "site"],
        },
        "statamic.cp.collections.entries.preview.create": {
            uri: "cp/collections/{collection}/entries/create/{site}/preview",
            methods: ["POST"],
            parameters: ["collection", "site"],
        },
        "statamic.cp.collections.entries.reorder": {
            uri: "cp/collections/{collection}/entries/reorder",
            methods: ["POST"],
            parameters: ["collection"],
        },
        "statamic.cp.collections.entries.store": {
            uri: "cp/collections/{collection}/entries/{site}",
            methods: ["POST"],
            parameters: ["collection", "site"],
        },
        "statamic.cp.collections.entries.edit": {
            uri: "cp/collections/{collection}/entries/{entry}",
            methods: ["GET", "HEAD"],
            parameters: ["collection", "entry"],
        },
        "statamic.cp.collections.entries.published.store": {
            uri: "cp/collections/{collection}/entries/{entry}/publish",
            methods: ["POST"],
            parameters: ["collection", "entry"],
        },
        "statamic.cp.collections.entries.published.destroy": {
            uri: "cp/collections/{collection}/entries/{entry}/unpublish",
            methods: ["POST"],
            parameters: ["collection", "entry"],
        },
        "statamic.cp.collections.entries.localize": {
            uri: "cp/collections/{collection}/entries/{entry}/localize",
            methods: ["POST"],
            parameters: ["collection", "entry"],
        },
        "statamic.cp.collections.entries.revisions.index": {
            uri: "cp/collections/{collection}/entries/{entry}/revisions",
            methods: ["GET", "HEAD"],
            parameters: ["collection", "entry"],
        },
        "statamic.cp.collections.entries.revisions.store": {
            uri: "cp/collections/{collection}/entries/{entry}/revisions",
            methods: ["POST"],
            parameters: ["collection", "entry"],
        },
        "statamic.cp.collections.entries.revisions.show": {
            uri: "cp/collections/{collection}/entries/{entry}/revisions/{revision}",
            methods: ["GET", "HEAD"],
            parameters: ["collection", "entry", "revision"],
        },
        "statamic.cp.collections.entries.restore-revision": {
            uri: "cp/collections/{collection}/entries/{entry}/restore-revision",
            methods: ["POST"],
            parameters: ["collection", "entry"],
        },
        "statamic.cp.collections.entries.preview.edit": {
            uri: "cp/collections/{collection}/entries/{entry}/preview",
            methods: ["POST"],
            parameters: ["collection", "entry"],
        },
        "statamic.cp.collections.entries.preview.popout": {
            uri: "cp/collections/{collection}/entries/{entry}/preview",
            methods: ["GET", "HEAD"],
            parameters: ["collection", "entry"],
        },
        "statamic.cp.collections.entries.update": {
            uri: "cp/collections/{collection}/entries/{entry}",
            methods: ["PATCH"],
            parameters: ["collection", "entry"],
        },
        "statamic.cp.taxonomies.index": {
            uri: "cp/taxonomies",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.taxonomies.create": {
            uri: "cp/taxonomies/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.taxonomies.store": {
            uri: "cp/taxonomies",
            methods: ["POST"],
        },
        "statamic.cp.taxonomies.show": {
            uri: "cp/taxonomies/{taxonomy}",
            methods: ["GET", "HEAD"],
            parameters: ["taxonomy"],
        },
        "statamic.cp.taxonomies.edit": {
            uri: "cp/taxonomies/{taxonomy}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["taxonomy"],
        },
        "statamic.cp.taxonomies.update": {
            uri: "cp/taxonomies/{taxonomy}",
            methods: ["PUT", "PATCH"],
            parameters: ["taxonomy"],
        },
        "statamic.cp.taxonomies.destroy": {
            uri: "cp/taxonomies/{taxonomy}",
            methods: ["DELETE"],
            parameters: ["taxonomy"],
        },
        "statamic.cp.taxonomies.blueprints.index": {
            uri: "cp/taxonomies/{taxonomy}/blueprints",
            methods: ["GET", "HEAD"],
            parameters: ["taxonomy"],
        },
        "statamic.cp.taxonomies.blueprints.create": {
            uri: "cp/taxonomies/{taxonomy}/blueprints/create",
            methods: ["GET", "HEAD"],
            parameters: ["taxonomy"],
        },
        "statamic.cp.taxonomies.blueprints.store": {
            uri: "cp/taxonomies/{taxonomy}/blueprints",
            methods: ["POST"],
            parameters: ["taxonomy"],
        },
        "statamic.cp.taxonomies.blueprints.show": {
            uri: "cp/taxonomies/{taxonomy}/blueprints/{blueprint}",
            methods: ["GET", "HEAD"],
            parameters: ["taxonomy", "blueprint"],
        },
        "statamic.cp.taxonomies.blueprints.edit": {
            uri: "cp/taxonomies/{taxonomy}/blueprints/{blueprint}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["taxonomy", "blueprint"],
        },
        "statamic.cp.taxonomies.blueprints.update": {
            uri: "cp/taxonomies/{taxonomy}/blueprints/{blueprint}",
            methods: ["PUT", "PATCH"],
            parameters: ["taxonomy", "blueprint"],
        },
        "statamic.cp.taxonomies.blueprints.destroy": {
            uri: "cp/taxonomies/{taxonomy}/blueprints/{blueprint}",
            methods: ["DELETE"],
            parameters: ["taxonomy", "blueprint"],
        },
        "statamic.cp.taxonomies.blueprints.reorder": {
            uri: "cp/taxonomies/{taxonomy}/blueprints/reorder",
            methods: ["POST"],
            parameters: ["taxonomy"],
        },
        "statamic.cp.taxonomies.terms.index": {
            uri: "cp/taxonomies/{taxonomy}/terms",
            methods: ["GET", "HEAD"],
            parameters: ["taxonomy"],
        },
        "statamic.cp.taxonomies.terms.actions.run": {
            uri: "cp/taxonomies/{taxonomy}/terms/actions",
            methods: ["POST"],
            parameters: ["taxonomy"],
        },
        "statamic.cp.taxonomies.terms.actions.bulk": {
            uri: "cp/taxonomies/{taxonomy}/terms/actions/list",
            methods: ["POST"],
            parameters: ["taxonomy"],
        },
        "statamic.cp.taxonomies.terms.create": {
            uri: "cp/taxonomies/{taxonomy}/terms/create/{site}",
            methods: ["GET", "HEAD"],
            parameters: ["taxonomy", "site"],
        },
        "statamic.cp.taxonomies.terms.preview.create": {
            uri: "cp/taxonomies/{taxonomy}/terms/create/{site}/preview",
            methods: ["POST"],
            parameters: ["taxonomy", "site"],
        },
        "statamic.cp.taxonomies.terms.store": {
            uri: "cp/taxonomies/{taxonomy}/terms/{site}",
            methods: ["POST"],
            parameters: ["taxonomy", "site"],
        },
        "statamic.cp.taxonomies.terms.edit": {
            uri: "cp/taxonomies/{taxonomy}/terms/{term}/{site?}",
            methods: ["GET", "HEAD"],
            parameters: ["taxonomy", "term", "site"],
        },
        "statamic.cp.taxonomies.terms.published.store": {
            uri: "cp/taxonomies/{taxonomy}/terms/{term}/{site?}",
            methods: ["POST"],
            parameters: ["taxonomy", "term", "site"],
        },
        "statamic.cp.taxonomies.terms.published.destroy": {
            uri: "cp/taxonomies/{taxonomy}/terms/{term}/{site?}",
            methods: ["DELETE"],
            parameters: ["taxonomy", "term", "site"],
        },
        "statamic.cp.taxonomies.terms.revisions.index": {
            uri: "cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions",
            methods: ["GET", "HEAD"],
            parameters: ["taxonomy", "term", "site"],
        },
        "statamic.cp.taxonomies.terms.revisions.store": {
            uri: "cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions",
            methods: ["POST"],
            parameters: ["taxonomy", "term", "site"],
        },
        "statamic.cp.taxonomies.terms.revisions.show": {
            uri: "cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions/{revision}",
            methods: ["GET", "HEAD"],
            parameters: ["taxonomy", "term", "site", "revision"],
        },
        "statamic.cp.taxonomies.terms.restore-revision": {
            uri: "cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision",
            methods: ["POST"],
            parameters: ["taxonomy", "term", "site"],
        },
        "statamic.cp.taxonomies.terms.preview.edit": {
            uri: "cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview",
            methods: ["POST"],
            parameters: ["taxonomy", "term", "site"],
        },
        "statamic.cp.taxonomies.terms.preview.popout": {
            uri: "cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview",
            methods: ["GET", "HEAD"],
            parameters: ["taxonomy", "term", "site"],
        },
        "statamic.cp.taxonomies.terms.update": {
            uri: "cp/taxonomies/{taxonomy}/terms/{term}/{site?}",
            methods: ["PATCH"],
            parameters: ["taxonomy", "term", "site"],
        },
        "statamic.cp.globals.index": {
            uri: "cp/globals",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.globals.create": {
            uri: "cp/globals/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.globals.store": { uri: "cp/globals", methods: ["POST"] },
        "statamic.cp.globals.edit": {
            uri: "cp/globals/{global_set}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["global_set"],
        },
        "statamic.cp.globals.update": {
            uri: "cp/globals/{global_set}",
            methods: ["PATCH"],
            parameters: ["global_set"],
        },
        "statamic.cp.globals.destroy": {
            uri: "cp/globals/{global_set}",
            methods: ["DELETE"],
            parameters: ["global_set"],
        },
        "statamic.cp.globals.variables.edit": {
            uri: "cp/globals/{global_set}",
            methods: ["GET", "HEAD"],
            parameters: ["global_set"],
        },
        "statamic.cp.globals.variables.update": {
            uri: "cp/globals/{global_set}/variables",
            methods: ["PATCH"],
            parameters: ["global_set"],
        },
        "statamic.cp.globals.blueprint.edit": {
            uri: "cp/globals/{global_set}/blueprint",
            methods: ["GET", "HEAD"],
            parameters: ["global_set"],
        },
        "statamic.cp.globals.blueprint.update": {
            uri: "cp/globals/{global_set}/blueprint",
            methods: ["PATCH"],
            parameters: ["global_set"],
        },
        "statamic.cp.asset-containers.index": {
            uri: "cp/asset-containers",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.asset-containers.create": {
            uri: "cp/asset-containers/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.asset-containers.store": {
            uri: "cp/asset-containers",
            methods: ["POST"],
        },
        "statamic.cp.asset-containers.show": {
            uri: "cp/asset-containers/{asset_container}",
            methods: ["GET", "HEAD"],
            parameters: ["asset_container"],
        },
        "statamic.cp.asset-containers.edit": {
            uri: "cp/asset-containers/{asset_container}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["asset_container"],
        },
        "statamic.cp.asset-containers.update": {
            uri: "cp/asset-containers/{asset_container}",
            methods: ["PUT", "PATCH"],
            parameters: ["asset_container"],
        },
        "statamic.cp.asset-containers.destroy": {
            uri: "cp/asset-containers/{asset_container}",
            methods: ["DELETE"],
            parameters: ["asset_container"],
        },
        "statamic.cp.asset-containers.blueprint.edit": {
            uri: "cp/asset-containers/{asset_container}/blueprint",
            methods: ["GET", "HEAD"],
            parameters: ["asset_container"],
        },
        "statamic.cp.asset-containers.blueprint.update": {
            uri: "cp/asset-containers/{asset_container}/blueprint",
            methods: ["PATCH"],
            parameters: ["asset_container"],
        },
        "statamic.cp.assets.actions.run": {
            uri: "cp/assets/actions",
            methods: ["POST"],
        },
        "statamic.cp.assets.actions.bulk": {
            uri: "cp/assets/actions/list",
            methods: ["POST"],
        },
        "statamic.cp.assets.browse.index": {
            uri: "cp/assets/browse",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.assets.folders.actions.run": {
            uri: "cp/assets/browse/folders/{asset_container}/actions",
            methods: ["POST"],
            parameters: ["asset_container"],
        },
        "statamic.cp.assets.browse.edit": {
            uri: "cp/assets/browse/{asset_container}/{path?}/edit",
            methods: ["GET", "HEAD"],
            wheres: { path: ".*" },
            parameters: ["asset_container", "path"],
        },
        "statamic.cp.assets.browse.show": {
            uri: "cp/assets/browse/{asset_container}/{path?}",
            methods: ["GET", "HEAD"],
            wheres: { path: ".*" },
            parameters: ["asset_container", "path"],
        },
        "statamic.cp.assets.index": {
            uri: "cp/assets",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.assets.create": {
            uri: "cp/assets/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.assets.store": { uri: "cp/assets", methods: ["POST"] },
        "statamic.cp.assets.show": {
            uri: "cp/assets/{encoded_asset}",
            methods: ["GET", "HEAD"],
            parameters: ["encoded_asset"],
        },
        "statamic.cp.assets.edit": {
            uri: "cp/assets/{encoded_asset}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["encoded_asset"],
        },
        "statamic.cp.assets.update": {
            uri: "cp/assets/{encoded_asset}",
            methods: ["PUT", "PATCH"],
            parameters: ["encoded_asset"],
        },
        "statamic.cp.assets.destroy": {
            uri: "cp/assets/{encoded_asset}",
            methods: ["DELETE"],
            parameters: ["encoded_asset"],
        },
        "statamic.cp.assets.download": {
            uri: "cp/assets/{encoded_asset}/download",
            methods: ["GET", "HEAD"],
            parameters: ["encoded_asset"],
        },
        "statamic.cp.assets.thumbnails.show": {
            uri: "cp/thumbnails/{encoded_asset}/{size?}/{orientation?}",
            methods: ["GET", "HEAD"],
            parameters: ["encoded_asset", "size", "orientation"],
        },
        "statamic.cp.assets.svgs.show": {
            uri: "cp/svgs/{encoded_asset}",
            methods: ["GET", "HEAD"],
            parameters: ["encoded_asset"],
        },
        "statamic.cp.assets.pdfs.show": {
            uri: "cp/pdfs/{encoded_asset}",
            methods: ["GET", "HEAD"],
            parameters: ["encoded_asset"],
        },
        "statamic.cp.fields.index": {
            uri: "cp/fields",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.fields.edit": { uri: "cp/fields/edit", methods: ["POST"] },
        "statamic.cp.fields.update": {
            uri: "cp/fields/update",
            methods: ["POST"],
        },
        "statamic.cp.fieldsets.index": {
            uri: "cp/fields/fieldsets",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.fieldsets.create": {
            uri: "cp/fields/fieldsets/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.fieldsets.store": {
            uri: "cp/fields/fieldsets",
            methods: ["POST"],
        },
        "statamic.cp.fieldsets.edit": {
            uri: "cp/fields/fieldsets/{fieldset}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["fieldset"],
        },
        "statamic.cp.fieldsets.update": {
            uri: "cp/fields/fieldsets/{fieldset}",
            methods: ["PUT", "PATCH"],
            parameters: ["fieldset"],
        },
        "statamic.cp.fieldsets.destroy": {
            uri: "cp/fields/fieldsets/{fieldset}",
            methods: ["DELETE"],
            parameters: ["fieldset"],
        },
        "statamic.cp.blueprints.index": {
            uri: "cp/fields/blueprints",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.updater": { uri: "cp/updater", methods: ["GET", "HEAD"] },
        "statamic.cp.updater.product": {
            uri: "cp/updater/{product}",
            methods: ["GET", "HEAD"],
            parameters: ["product"],
        },
        "statamic.cp.duplicates": {
            uri: "cp/duplicates",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.duplicates.regenerate": {
            uri: "cp/duplicates/regenerate",
            methods: ["POST"],
        },
        "statamic.cp.addons.index": {
            uri: "cp/addons",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.forms.actions.run": {
            uri: "cp/forms/actions",
            methods: ["POST"],
        },
        "statamic.cp.forms.actions.bulk": {
            uri: "cp/forms/actions/list",
            methods: ["POST"],
        },
        "statamic.cp.forms.submissions.actions.run": {
            uri: "cp/forms/{form}/submissions/actions",
            methods: ["POST"],
            parameters: ["form"],
        },
        "statamic.cp.forms.submissions.actions.bulk": {
            uri: "cp/forms/{form}/submissions/actions/list",
            methods: ["POST"],
            parameters: ["form"],
        },
        "statamic.cp.forms.index": {
            uri: "cp/forms",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.forms.create": {
            uri: "cp/forms/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.forms.store": { uri: "cp/forms", methods: ["POST"] },
        "statamic.cp.forms.show": {
            uri: "cp/forms/{form}",
            methods: ["GET", "HEAD"],
            parameters: ["form"],
        },
        "statamic.cp.forms.edit": {
            uri: "cp/forms/{form}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["form"],
        },
        "statamic.cp.forms.update": {
            uri: "cp/forms/{form}",
            methods: ["PUT", "PATCH"],
            parameters: ["form"],
        },
        "statamic.cp.forms.destroy": {
            uri: "cp/forms/{form}",
            methods: ["DELETE"],
            parameters: ["form"],
        },
        "statamic.cp.forms.submissions.index": {
            uri: "cp/forms/{form}/submissions",
            methods: ["GET", "HEAD"],
            parameters: ["form"],
        },
        "statamic.cp.forms.submissions.create": {
            uri: "cp/forms/{form}/submissions/create",
            methods: ["GET", "HEAD"],
            parameters: ["form"],
        },
        "statamic.cp.forms.submissions.store": {
            uri: "cp/forms/{form}/submissions",
            methods: ["POST"],
            parameters: ["form"],
        },
        "statamic.cp.forms.submissions.show": {
            uri: "cp/forms/{form}/submissions/{submission}",
            methods: ["GET", "HEAD"],
            parameters: ["form", "submission"],
        },
        "statamic.cp.forms.submissions.edit": {
            uri: "cp/forms/{form}/submissions/{submission}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["form", "submission"],
        },
        "statamic.cp.forms.submissions.update": {
            uri: "cp/forms/{form}/submissions/{submission}",
            methods: ["PUT", "PATCH"],
            parameters: ["form", "submission"],
        },
        "statamic.cp.forms.submissions.destroy": {
            uri: "cp/forms/{form}/submissions/{submission}",
            methods: ["DELETE"],
            parameters: ["form", "submission"],
        },
        "statamic.cp.forms.export": {
            uri: "cp/forms/{form}/export/{type}",
            methods: ["GET", "HEAD"],
            parameters: ["form", "type"],
        },
        "statamic.cp.forms.blueprint.edit": {
            uri: "cp/forms/{form}/blueprint",
            methods: ["GET", "HEAD"],
            parameters: ["form"],
        },
        "statamic.cp.forms.blueprint.update": {
            uri: "cp/forms/{form}/blueprint",
            methods: ["PATCH"],
            parameters: ["form"],
        },
        "statamic.cp.users.actions.run": {
            uri: "cp/users/actions",
            methods: ["POST"],
        },
        "statamic.cp.users.actions.bulk": {
            uri: "cp/users/actions/list",
            methods: ["POST"],
        },
        "statamic.cp.users.blueprint.edit": {
            uri: "cp/users/blueprint",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.users.blueprint.update": {
            uri: "cp/users/blueprint",
            methods: ["PATCH"],
        },
        "statamic.cp.users.index": {
            uri: "cp/users",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.users.create": {
            uri: "cp/users/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.users.store": { uri: "cp/users", methods: ["POST"] },
        "statamic.cp.users.show": {
            uri: "cp/users/{user}",
            methods: ["GET", "HEAD"],
            parameters: ["user"],
        },
        "statamic.cp.users.edit": {
            uri: "cp/users/{user}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["user"],
        },
        "statamic.cp.users.update": {
            uri: "cp/users/{user}",
            methods: ["PUT", "PATCH"],
            parameters: ["user"],
        },
        "statamic.cp.users.destroy": {
            uri: "cp/users/{user}",
            methods: ["DELETE"],
            parameters: ["user"],
        },
        "statamic.cp.users.password.update": {
            uri: "cp/users/{user}/password",
            methods: ["PATCH"],
            parameters: ["user"],
        },
        "statamic.cp.account": { uri: "cp/account", methods: ["GET", "HEAD"] },
        "statamic.cp.user-groups.blueprint.edit": {
            uri: "cp/user-groups/blueprint",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.user-groups.blueprint.update": {
            uri: "cp/user-groups/blueprint",
            methods: ["PATCH"],
        },
        "statamic.cp.user-groups.index": {
            uri: "cp/user-groups",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.user-groups.create": {
            uri: "cp/user-groups/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.user-groups.store": {
            uri: "cp/user-groups",
            methods: ["POST"],
        },
        "statamic.cp.user-groups.show": {
            uri: "cp/user-groups/{user_group}",
            methods: ["GET", "HEAD"],
            parameters: ["user_group"],
        },
        "statamic.cp.user-groups.edit": {
            uri: "cp/user-groups/{user_group}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["user_group"],
        },
        "statamic.cp.user-groups.update": {
            uri: "cp/user-groups/{user_group}",
            methods: ["PUT", "PATCH"],
            parameters: ["user_group"],
        },
        "statamic.cp.user-groups.destroy": {
            uri: "cp/user-groups/{user_group}",
            methods: ["DELETE"],
            parameters: ["user_group"],
        },
        "statamic.cp.roles.index": {
            uri: "cp/roles",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.roles.create": {
            uri: "cp/roles/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.roles.store": { uri: "cp/roles", methods: ["POST"] },
        "statamic.cp.roles.show": {
            uri: "cp/roles/{role}",
            methods: ["GET", "HEAD"],
            parameters: ["role"],
        },
        "statamic.cp.roles.edit": {
            uri: "cp/roles/{role}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["role"],
        },
        "statamic.cp.roles.update": {
            uri: "cp/roles/{role}",
            methods: ["PUT", "PATCH"],
            parameters: ["role"],
        },
        "statamic.cp.roles.destroy": {
            uri: "cp/roles/{role}",
            methods: ["DELETE"],
            parameters: ["role"],
        },
        "statamic.cp.user.exists": { uri: "cp/user-exists", methods: ["POST"] },
        "statamic.cp.search": { uri: "cp/search", methods: ["GET", "HEAD"] },
        "statamic.cp.utilities.index": {
            uri: "cp/utilities",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.utilities.cache": {
            uri: "cp/utilities/cache",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.utilities.cache.clear": {
            uri: "cp/utilities/cache/cache/{cache}",
            methods: ["POST"],
            parameters: ["cache"],
        },
        "statamic.cp.utilities.cache.warm": {
            uri: "cp/utilities/cache/cache/{cache}/warm",
            methods: ["POST"],
            parameters: ["cache"],
        },
        "statamic.cp.utilities.phpinfo": {
            uri: "cp/utilities/phpinfo",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.utilities.search": {
            uri: "cp/utilities/search",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.utilities.search.update": {
            uri: "cp/utilities/search",
            methods: ["POST"],
        },
        "statamic.cp.utilities.email": {
            uri: "cp/utilities/email",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.utilities.email.": {
            uri: "cp/utilities/email",
            methods: ["POST"],
        },
        "statamic.cp.utilities.licensing": {
            uri: "cp/utilities/licensing",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.utilities.licensing.refresh": {
            uri: "cp/utilities/licensing/refresh",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.utilities.logbook.show": {
            uri: "cp/utilities/logbook",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.utilities.logbook.destroy": {
            uri: "cp/utilities/logbook/delete",
            methods: ["DELETE"],
        },
        "statamic.cp.relationship.index": {
            uri: "cp/fieldtypes/relationship",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.relationship.data": {
            uri: "cp/fieldtypes/relationship/data",
            methods: ["POST"],
        },
        "statamic.cp.relationship.filters": {
            uri: "cp/fieldtypes/relationship/filters",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.markdown.preview": {
            uri: "cp/fieldtypes/markdown",
            methods: ["POST"],
        },
        "statamic.cp.files.upload": {
            uri: "cp/fieldtypes/files/upload",
            methods: ["POST"],
        },
        "statamic.cp.api.addons.index": {
            uri: "cp/api/addons",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.api.addons.create": {
            uri: "cp/api/addons/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.api.addons.store": {
            uri: "cp/api/addons",
            methods: ["POST"],
        },
        "statamic.cp.api.addons.show": {
            uri: "cp/api/addons/{addon}",
            methods: ["GET", "HEAD"],
            parameters: ["addon"],
        },
        "statamic.cp.api.addons.edit": {
            uri: "cp/api/addons/{addon}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["addon"],
        },
        "statamic.cp.api.addons.update": {
            uri: "cp/api/addons/{addon}",
            methods: ["PUT", "PATCH"],
            parameters: ["addon"],
        },
        "statamic.cp.api.addons.destroy": {
            uri: "cp/api/addons/{addon}",
            methods: ["DELETE"],
            parameters: ["addon"],
        },
        "statamic.cp.api.templates.index": {
            uri: "cp/api/templates",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.api.templates.create": {
            uri: "cp/api/templates/create",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.api.templates.store": {
            uri: "cp/api/templates",
            methods: ["POST"],
        },
        "statamic.cp.api.templates.show": {
            uri: "cp/api/templates/{template}",
            methods: ["GET", "HEAD"],
            parameters: ["template"],
        },
        "statamic.cp.api.templates.edit": {
            uri: "cp/api/templates/{template}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["template"],
        },
        "statamic.cp.api.templates.update": {
            uri: "cp/api/templates/{template}",
            methods: ["PUT", "PATCH"],
            parameters: ["template"],
        },
        "statamic.cp.api.templates.destroy": {
            uri: "cp/api/templates/{template}",
            methods: ["DELETE"],
            parameters: ["template"],
        },
        "statamic.cp.preferences.index": {
            uri: "cp/preferences",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.preferences.user.edit": {
            uri: "cp/preferences/edit",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.preferences.user.update": {
            uri: "cp/preferences",
            methods: ["PATCH"],
        },
        "statamic.cp.preferences.role.edit": {
            uri: "cp/preferences/roles/{role}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["role"],
        },
        "statamic.cp.preferences.role.update": {
            uri: "cp/preferences/roles/{role}",
            methods: ["PATCH"],
            parameters: ["role"],
        },
        "statamic.cp.preferences.default.edit": {
            uri: "cp/preferences/default/edit",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.preferences.default.update": {
            uri: "cp/preferences/default",
            methods: ["PATCH"],
        },
        "statamic.cp.preferences.store": {
            uri: "cp/preferences/js",
            methods: ["POST"],
        },
        "statamic.cp.preferences.destroy": {
            uri: "cp/preferences/js/{key}",
            methods: ["DELETE"],
            parameters: ["key"],
        },
        "statamic.cp.preferences.nav.index": {
            uri: "cp/preferences/nav",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.preferences.nav.user.edit": {
            uri: "cp/preferences/nav/edit",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.preferences.nav.user.update": {
            uri: "cp/preferences/nav",
            methods: ["PATCH"],
        },
        "statamic.cp.preferences.nav.user.destroy": {
            uri: "cp/preferences/nav",
            methods: ["DELETE"],
        },
        "statamic.cp.preferences.nav.role.edit": {
            uri: "cp/preferences/nav/roles/{role}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["role"],
        },
        "statamic.cp.preferences.nav.role.update": {
            uri: "cp/preferences/nav/roles/{role}",
            methods: ["PATCH"],
            parameters: ["role"],
        },
        "statamic.cp.preferences.nav.role.destroy": {
            uri: "cp/preferences/nav/roles/{role}",
            methods: ["DELETE"],
            parameters: ["role"],
        },
        "statamic.cp.preferences.nav.default.edit": {
            uri: "cp/preferences/nav/default/edit",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.preferences.nav.default.update": {
            uri: "cp/preferences/nav/default",
            methods: ["PATCH"],
        },
        "statamic.cp.preferences.nav.default.destroy": {
            uri: "cp/preferences/nav/default",
            methods: ["DELETE"],
        },
        "statamic.cp.session.timeout": {
            uri: "cp/session-timeout",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.playground": {
            uri: "cp/playground",
            methods: ["GET", "HEAD"],
        },
        "statamic.cp.404": {
            uri: "cp/{segments}",
            methods: ["GET", "HEAD"],
            wheres: { segments: ".*" },
            parameters: ["segments"],
        },
        "statamic.forms.submit": {
            uri: "!/forms/{form}",
            methods: ["POST"],
            parameters: ["form"],
        },
        "statamic.protect.password.show": {
            uri: "!/protect/password",
            methods: ["GET", "HEAD"],
        },
        "statamic.protect.password.store": {
            uri: "!/protect/password",
            methods: ["POST"],
        },
        "statamic.login": { uri: "!/auth/login", methods: ["POST"] },
        "statamic.logout": { uri: "!/auth/logout", methods: ["GET", "HEAD"] },
        "statamic.register": { uri: "!/auth/register", methods: ["POST"] },
        "statamic.profile": { uri: "!/auth/profile", methods: ["POST"] },
        "statamic.password": { uri: "!/auth/password", methods: ["POST"] },
        "statamic.password.email": {
            uri: "!/auth/password/email",
            methods: ["POST"],
        },
        "statamic.password.reset": {
            uri: "!/auth/password/reset/{token}",
            methods: ["GET", "HEAD"],
            parameters: ["token"],
        },
        "statamic.password.reset.action": {
            uri: "!/auth/password/reset",
            methods: ["POST"],
        },
        "statamic.account.activate": {
            uri: "!/auth/activate/{token}",
            methods: ["GET", "HEAD"],
            parameters: ["token"],
        },
        "statamic.account.activate.action": {
            uri: "!/auth/activate",
            methods: ["POST"],
        },
        "statamic.": { uri: "!/nocache", methods: ["POST"] },
        "statamic.oauth.login": {
            uri: "oauth/{provider}",
            methods: ["GET", "HEAD"],
            parameters: ["provider"],
        },
        "statamic.oauth.callback": {
            uri: "oauth/{provider}/callback",
            methods: ["GET", "HEAD"],
            parameters: ["provider"],
        },
    },
};

if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
