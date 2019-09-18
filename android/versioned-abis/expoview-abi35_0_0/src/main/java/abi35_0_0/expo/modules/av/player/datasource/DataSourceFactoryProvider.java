package abi35_0_0.expo.modules.av.player.datasource;

import android.content.Context;

import com.google.android.exoplayer2.upstream.DataSource;

import java.util.Map;

import abi35_0_0.org.unimodules.core.ModuleRegistry;

public interface DataSourceFactoryProvider {
  DataSource.Factory createFactory(Context reactApplicationContext, ModuleRegistry moduleRegistry, String userAgent, Map<String, Object> requestHeaders);
}
